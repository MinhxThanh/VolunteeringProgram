package edu.home.repository;

import edu.home.entity.Donor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DonorRepository extends JpaRepository<Donor, Integer> {
    List<Donor> findAllByBlogId(Integer id);
}