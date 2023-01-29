package edu.home.repository;

import edu.home.entity.Blog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.Tuple;
import java.util.List;

public interface BlogRepository extends JpaRepository<Blog, Integer> {
    List<Blog> findBlogsByAccountEmail(String email);

    @Query(value = "call getAllBlog()", nativeQuery = true)
    List<Tuple> getAllBlog();

    @Transactional
    @Modifying
    @Query("update Blog b set b.donated = ?1, b.donateCount = ?2 where b.id = ?3")
    void updateDonatedAndDonateCountById(float money, float count, int id);
}