package edu.home.cotroller;

import edu.home.common.entity.BlogBinding;
import edu.home.entity.Account;
import edu.home.entity.Blog;
import edu.home.entity.Image;
import edu.home.service.AccountService;
import edu.home.service.BlogImageService;
import edu.home.service.BlogService;
import edu.home.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.math.BigInteger;
import java.util.Date;
import java.util.List;

@Controller
@RequestMapping(value = "/blog", method = RequestMethod.GET)
public class BlogController {
    private final String UPLOAD_DIR = "/assets/images/";
    @Autowired
    private BlogService blogService;
    @Autowired
    private AccountService accountService;
    @Autowired
    private ImageService imageService;
    @Autowired
    private BlogImageService blogImageService;
    @Autowired
    private ServletContext servletContext;

    @RequestMapping(value = "index")
    public String index(Model model, HttpServletRequest request, BlogBinding blogBinding){
        Account account = accountService.findByUsernameOrEmail(request.getUserPrincipal().getName());
        blogBinding.setCreateDate(new Date());
        blogBinding.setIsDisplay(true);
        blogBinding.setViewCount(BigInteger.valueOf(0));
        blogBinding.setDonated((float) 0);
        blogBinding.setDonateCount((float) 0);
        blogBinding.setCreateBy(account.getUsername());
        model.addAttribute("imageList", blogImageService.findAllImage());
        model.addAttribute("blogList", blogService.findByAccount(account.getEmail()));
        model.addAttribute("blogBinding", blogBinding);
        return "blog/index";
    }

    @RequestMapping(value = "edit/save", method = RequestMethod.POST)
    public String createBlog(Model model, HttpServletRequest request, @Validated BlogBinding BlogBinding,  BindingResult bindingResult){
        if (bindingResult.hasErrors()){
            model.addAttribute("error", bindingResult.getFieldError());
            return "blog/index";
        }
        Blog blog = new Blog();
        blog.setTitle(BlogBinding.getTitle());
        blog.setViewCount(BigInteger.valueOf(1));
        blog.setDonated(1);
        blog.setGoalDonate(BlogBinding.getGoalDonate());
        blog.setDonateCount(1);
        blog.setStartDate(BlogBinding.getStartDate());
        blog.setEndDate(BlogBinding.getEndDate());
        blog.setCreateDate(new Date());
        blog.setContent(BlogBinding.getContent());
        blog.setIsDisplay(BlogBinding.getIsDisplay());
        blog.setSummary(BlogBinding.getSummary());
        blog.setAccount(accountService.findByUsernameOrEmail(request.getUserPrincipal().getName()));

        blogService.create(blog);
        return "redirect:/blog/index";
    }

    @RequestMapping(value = "edit/{id}", method = RequestMethod.GET)
    public String findById(Model model, @PathVariable("id") Integer id){
        Blog blog = blogService.findById(id);
        BlogBinding blogBinding = new BlogBinding();
        blogBinding.setTitle(blog.getTitle());
        blogBinding.setSummary(blog.getSummary());
        blogBinding.setViewCount(blog.getViewCount());
        blogBinding.setDonated(blog.getDonated());
        blogBinding.setGoalDonate(blog.getGoalDonate());
        blogBinding.setDonateCount(blog.getDonateCount());
        blogBinding.setStartDate(blog.getStartDate());
        blogBinding.setEndDate(blog.getEndDate());
        blogBinding.setCreateDate(blog.getCreateDate());
        blogBinding.setContent(blog.getContent());
        blogBinding.setIsDisplay(blog.getIsDisplay());
        blogBinding.setCreateBy(blog.getAccount().getUsername());

        model.addAttribute("idUpdate", blog.getId());
        model.addAttribute("blogBinding", blogBinding);
        model.addAttribute("imageList", blogImageService.findAllImage());
        model.addAttribute("blogList", blogService.findByAccount(blog.getAccount().getEmail()));

        return "blog/index";
    }

    @RequestMapping(value = "edit/update/{id}", method = RequestMethod.POST)
    public String updateById(Model model, @PathVariable("id") Integer id, @Validated BlogBinding BlogBinding,  BindingResult bindingResult){
        if (bindingResult.hasErrors()){
            model.addAttribute("error", bindingResult.getFieldError());
            return "blog/index";
        }
        Blog blog = blogService.findById(id);

        Blog blogUpdate = new Blog();
        blogUpdate.setId(blog.getId());
        blogUpdate.setTitle(BlogBinding.getTitle());
        blogUpdate.setViewCount(blog.getViewCount());
        blogUpdate.setDonated(blog.getDonated());
        blogUpdate.setGoalDonate(BlogBinding.getGoalDonate());
        blogUpdate.setDonateCount(blog.getDonateCount());
        blogUpdate.setStartDate(BlogBinding.getStartDate());
        blogUpdate.setEndDate(BlogBinding.getEndDate());
        blogUpdate.setCreateDate(blog.getCreateDate());
        blogUpdate.setContent(BlogBinding.getContent());
        blogUpdate.setIsDisplay(BlogBinding.getIsDisplay());
        blogUpdate.setSummary(BlogBinding.getSummary());
        blogUpdate.setAccount(blog.getAccount());

        blogService.update(blogUpdate);
        return "redirect:/blog/index";
    }

    @RequestMapping(value = "edit/upload/{id}", method = RequestMethod.POST)
    public String handleFileUpload(Model model, @PathVariable("id") Integer id,
                                   @RequestParam("file") List<MultipartFile> files) throws IOException {
        File dir = new File("src/main/resources/static/assets/images");
        System.out.println("Path: " + dir.getAbsolutePath());
        if (!dir.exists()) {
            dir.mkdirs();
        }

        for(MultipartFile file : files) {
            String s = System.currentTimeMillis() + file.getOriginalFilename();
            String name = "image-" + id + "-" + Integer.toHexString(s.hashCode()) + s.substring(s.lastIndexOf("."));

            File destinationFile = new File(dir.getAbsolutePath(), name);
            file.transferTo(destinationFile);
            System.out.println("save");
            Image image = imageService.create(name);
            blogImageService.create(id, image.getId());
        }
        return "redirect:/blog/index";
    }
}
