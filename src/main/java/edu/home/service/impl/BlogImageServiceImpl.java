package edu.home.service.impl;

import edu.home.common.entity.BlogImageList;
import edu.home.entity.Blog;
import edu.home.entity.BlogImage;
import edu.home.entity.Image;
import edu.home.repository.BlogImageRepository;
import edu.home.repository.BlogRepository;
import edu.home.service.BlogImageService;
import edu.home.service.BlogService;
import edu.home.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BlogImageServiceImpl implements BlogImageService {
    @Autowired
    private BlogImageRepository dao;
    @Autowired
    private BlogService blogService;
    @Autowired
    private ImageService imageService;

    @Override
    public BlogImage create(Integer id, Integer imageId) {
        BlogImage blogImage = new BlogImage();
        blogImage.setBlog(blogService.findById(id));
        blogImage.setImage(imageService.findById(imageId));
        return dao.save(blogImage);
    }

    @Override
    public List<BlogImageList> findAllImage() {
        return dao.getListImage();
    }
}
