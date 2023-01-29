package edu.home.service.impl;

import com.paypal.api.payments.*;
import com.paypal.base.rest.APIContext;
import com.paypal.base.rest.PayPalRESTException;
import edu.home.entity.OrderDetail;
import edu.home.service.PaymentService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PaymentServiceImpl implements PaymentService {
    private static final String CLIENT_ID = "AYPdu0VthWRvUGqb0JjsPE5h7dtz0H0BxGmpe8nb9TEdYYYX9tS3xRxrmR4j7sbPKrSlaEL9cMnydmvM";
    private static final String CLIENT_SECRET = "EAhmuRIwE_ilpoTT57EwHNKlhKfWuZ8zvUYYTz8a0qBnmkPTCjbf5MxV9fOwPRiEGKDZT0vs3br2waqF";
    private static final String MODE = "sandbox";

    @Override
    public Payment executePayment(String paymentId, String payerId) throws PayPalRESTException {
        PaymentExecution paymentExecution = new PaymentExecution();
        paymentExecution.setPayerId(payerId);

        Payment payment = new Payment().setId(paymentId);

        APIContext apiContext = new APIContext(CLIENT_ID, CLIENT_SECRET, MODE);

        return payment.execute(apiContext, paymentExecution);
    }

    @Override
    public Payment getPaymentDetails(String paymentId) throws PayPalRESTException {
        APIContext apiContext = new APIContext(CLIENT_ID, CLIENT_SECRET, MODE);
        return Payment.get(apiContext, paymentId);
    }


    @Override
    public String authorizePayment(OrderDetail orderDetail) throws PayPalRESTException {
        Payment requestPayment = new Payment();
        requestPayment.setTransactions(this.getTransactionInformation(orderDetail))
                .setRedirectUrls(this.getRedirectUrls())
                .setPayer(this.getPayerInformation())
                .setIntent("authorize");

        APIContext apiContext = new APIContext(CLIENT_ID, CLIENT_SECRET, MODE);

        Payment approvedPayment = requestPayment.create(apiContext);

        System.out.println("authorizePayment: " + approvedPayment);
        return this.getApprovalLink(approvedPayment);
    }

    private String getApprovalLink(Payment approvedPayment){
        List<Links> links = approvedPayment.getLinks();
        String approvalLink = null;

        for(Links item : links){
            if (item.getRel().equalsIgnoreCase("approval_url"))
                approvalLink = item.getHref();
        }

        return approvalLink;
    }

    private List<Transaction> getTransactionInformation(OrderDetail orderDetail){
        Details details = new Details();
        details.setShipping(orderDetail.getShipping());
        details.setSubtotal(orderDetail.getSubtotal());
        details.setTax(orderDetail.getTax());

        Amount amount = new Amount();
        amount.setCurrency("USD");
        amount.setTotal(orderDetail.getTotal());
        amount.setDetails(details);

        Transaction transaction = new Transaction();
        transaction.setAmount(amount);
        transaction.setDescription(orderDetail.getProductName());

        ItemList itemList = new ItemList();
        List<Item> items = new ArrayList<Item>();

        Item item = new Item();
        item.setCurrency("USD")
                .setName(orderDetail.getProductName())
                .setPrice(orderDetail.getSubtotal())
                .setTax(orderDetail.getTax())
                .setQuantity("1");

        items.add(item);
        itemList.setItems(items);
        transaction.setItemList(itemList);

        List<Transaction> transactionList = new ArrayList<Transaction>();
        transactionList.add(transaction);

        return transactionList;
    }

    private RedirectUrls getRedirectUrls() {
        RedirectUrls redirectUrls = new RedirectUrls();
        redirectUrls.setCancelUrl("http://localhost:8080/home/cancel");
        redirectUrls.setReturnUrl("http://localhost:8080/review");
        return redirectUrls;
    }

    private Payer getPayerInformation() {
        Payer payer = new Payer();
        payer.setPaymentMethod("paypal");

        PayerInfo payerInfo = new PayerInfo();
        payerInfo.setFirstName("Lee")
                .setLastName("Thanh")
                .setEmail("lethanh.000113@gmail.com");

        payer.setPayerInfo(payerInfo);
        return payer;
    }
}
