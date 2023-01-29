package edu.home.cotroller;

import edu.home.service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
    @Autowired
    private BlogService blogService;

    @RequestMapping(value = "home/index")
    public String home(Model model){
        model.addAttribute("list", blogService.getAllBlog());
        return "home/index";
    }
}
