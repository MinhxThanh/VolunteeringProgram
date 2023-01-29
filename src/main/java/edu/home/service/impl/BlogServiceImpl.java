package edu.home.service.impl;

import edu.home.common.entity.BlogsList;
import edu.home.entity.Blog;
import edu.home.repository.BlogRepository;
import edu.home.service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.Tuple;
import java.math.BigInteger;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class BlogServiceImpl implements BlogService {
    @Autowired
    private BlogRepository dao;

    @Override
    public Blog create(Blog blog) {
        return dao.save(blog);
    }

    @Override
    public List<Blog> findALl() {
        return dao.findAll();
    }

    @Override
    public Blog findById(Integer id) {
        return dao.findById(id).get();
    }

    @Override
    public Blog update(Blog blogUpdate) {
        return dao.save(blogUpdate);
    }

    @Override
    public List<Blog> findByAccount(String email) {
        return dao.findBlogsByAccountEmail(email);
    }
    @Override
    public List<BlogsList> getAllBlog(){
        List<Tuple> tuples = dao.getAllBlog();
        List<BlogsList> blogsLists = tuples.stream().map(t -> new BlogsList(
                t.get(0, Integer.class),
                t.get(1, String.class),
                t.get(2, Float.class),
                t.get(3, Float.class),
                t.get(4, Float.class),
                t.get(5, BigInteger.class),
                t.get(6, String.class),
                t.get(7, String.class),
                t.get(8, String.class),
                t.get(9, Double.class)
        )).collect(Collectors.toList());
        return blogsLists;
    }

    @Override
    public void updateDonatedAndDonateCountById(float money, float count, int id) {
        dao.updateDonatedAndDonateCountById(money, count, id);
    }
}
