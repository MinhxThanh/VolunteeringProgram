package edu.home.repository;

import edu.home.common.entity.BlogImageList;
import edu.home.entity.BlogImage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BlogImageRepository extends JpaRepository<BlogImage, Integer> {
    @Query("select new BlogImageList(i.id, i.name, bi.blog.id) from BlogImage bi left join Image i on i.id = bi.image.id")
    List<BlogImageList> getListImage();
}