package edu.home.service;

import edu.home.common.entity.BlogsList;
import edu.home.entity.Blog;

import java.util.List;

public interface BlogService {
    Blog create(Blog blog);

    List<Blog> findALl();

    Blog findById(Integer id);

    Blog update(Blog blogUpdate);

    List<Blog> findByAccount(String email);

    List<BlogsList> getAllBlog();

    void updateDonatedAndDonateCountById(float money, float count, int id);
}
