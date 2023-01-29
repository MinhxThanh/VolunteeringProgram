package edu.home.cotroller;

import edu.home.entity.Blog;
import edu.home.entity.OrderDetail;
import edu.home.service.BlogImageService;
import edu.home.service.BlogService;
import edu.home.service.DonorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.time.temporal.Temporal;
import java.util.Date;

@Controller
@RequestMapping(value = "story")
public class BlogDetailController {
    @Autowired
    private BlogService blogService;
    @Autowired
    private BlogImageService blogImageService;
    @Autowired
    private DonorService donorService;

    @RequestMapping(value = "detail/{id}")
    public String detail(Model model, @PathVariable("id") Integer id){
        Blog blog =  blogService.findById(id);
        model.addAttribute("daysBetween", getDayBetween(blog.getStartDate(), blog.getEndDate()));
        model.addAttribute("percentFinish", calculatePercentage(BigDecimal.valueOf(blog.getDonated()), BigDecimal.valueOf(blog.getGoalDonate())));
        model.addAttribute("item", blog);
        model.addAttribute("imageList", blogImageService.findAllImage());
        model.addAttribute("donorList", donorService.findAllByBlogId(id));
        return "blog/detail";
    }


    private BigDecimal calculatePercentage(BigDecimal a, BigDecimal b) {
        return a.divide(b, 2, RoundingMode.HALF_UP).multiply(BigDecimal.valueOf(100));
    }

    private Long getDayBetween(Date start, Date end){
        java.sql.Date sqlStartDate = (java.sql.Date) start;
        java.sql.Date sqlEndDate = (java.sql.Date) end;
        LocalDate startDate = sqlStartDate.toLocalDate();
        LocalDate endDate = sqlEndDate.toLocalDate();
        return ChronoUnit.DAYS.between(startDate, endDate);
    }

}
