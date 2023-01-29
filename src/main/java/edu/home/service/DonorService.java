package edu.home.service;

import edu.home.entity.Donor;

import java.util.List;

public interface DonorService {
    List<Donor> findAllByBlogId(Integer id);

    Donor create(Donor donor);
}
