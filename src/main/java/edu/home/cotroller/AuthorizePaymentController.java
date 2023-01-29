package edu.home.cotroller;

import com.paypal.api.payments.PayerInfo;
import com.paypal.api.payments.Payment;
import com.paypal.api.payments.ShippingAddress;
import com.paypal.api.payments.Transaction;
import com.paypal.base.rest.PayPalRESTException;
import edu.home.entity.Blog;
import edu.home.entity.Donor;
import edu.home.entity.OrderDetail;
import edu.home.service.BlogService;
import edu.home.service.DonorService;
import edu.home.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import javax.websocket.server.PathParam;
import java.util.Date;

@Controller
public class AuthorizePaymentController {
    @Autowired
    private PaymentService paymentService;
    @Autowired
    private DonorService donorService;
    @Autowired
    private BlogService blogService;

    private Integer blog_id = 0;

    @RequestMapping(value = "authorize_payment", method = RequestMethod.POST)
    public String checkOut(Model model, @RequestParam("blogTitle") String blogTitle,
                           @RequestParam("blogId") Integer blogId,
                           @RequestParam("subtotal") String subtotal) throws PayPalRESTException {
        OrderDetail order = new OrderDetail();
        order.setProductName(blogTitle);
        order.setSubtotal(subtotal);
        order.setTax(String.valueOf(0));
        order.setShipping(String.valueOf(0));
        order.setTotal(subtotal);
        this.blog_id = blogId;
        String approvalLink = paymentService.authorizePayment(order);

        System.out.println("AuthorizePaymentController: " + approvalLink);
        return "redirect:" + approvalLink;
    }

    @RequestMapping(value = "review", method = RequestMethod.GET)
    public String reviewDetail(Model model,
                               @RequestParam("PayerID") String payerID,
                                       @RequestParam("paymentId") String paymentId) throws PayPalRESTException {
        Payment payment = paymentService.getPaymentDetails(paymentId);

        PayerInfo payerInfo = payment.getPayer().getPayerInfo();
        Transaction transaction = payment.getTransactions().get(0);
        ShippingAddress shippingAddress = transaction.getItemList().getShippingAddress();

        model.addAttribute("payerInfo", payerInfo);
        model.addAttribute("transaction", transaction);
        model.addAttribute("shippingAddress", shippingAddress);
//        model.addAttribute("payerID", payerID);
//        model.addAttribute("paymentId", paymentId);

        System.out.println("payer ID: " + payerID);
        System.out.println("payment Id: " + paymentId);

        return "checkout/review";
//        return "redirect:/review?paymentId=" + paymentId + "&PayerID=" + payerID;
    }

    @RequestMapping(value = "execute-payment", method = RequestMethod.POST)
    public String executePayment(Model model, @RequestParam("paymentId") String paymentId,
                                 @RequestParam("payerID") String payerID) throws PayPalRESTException {
        Payment payment = paymentService.executePayment(paymentId, payerID);

        PayerInfo payerInfo = payment.getPayer().getPayerInfo();
        Transaction transaction = payment.getTransactions().get(0);

        System.out.println("executePayment blog id: " + this.blog_id);
        Donor donor = new Donor();
        Blog blog = blogService.findById(this.blog_id);
        System.out.println("User phone: " + payerInfo.getPhoneType());
        donor.setPhone(payerInfo.getEmail());
        donor.setFullName(payerInfo.getFirstName() + " " + payerInfo.getLastName());
        donor.setDonated(Float.parseFloat(transaction.getAmount().getTotal()) * 23000);
        donor.setBlog(blog);
        donor.setCreateDate(new Date());

        float totalDonate  = blog.getDonated() + (Float.parseFloat(transaction.getAmount().getTotal()) * 23000);
        blogService.updateDonatedAndDonateCountById( totalDonate, blog.getDonateCount() + 1, blog.getId());
        donorService.create(donor);
        model.addAttribute("payerInfo", payerInfo);
        model.addAttribute("transaction", transaction);

        return "checkout/receipt";
    }

}
