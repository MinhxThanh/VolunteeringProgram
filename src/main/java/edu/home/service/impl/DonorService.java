package edu.home.service.impl;

import edu.home.entity.Donor;
import edu.home.repository.DonorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DonorService implements edu.home.service.DonorService {
    @Autowired
    private DonorRepository dao;
    @Override
    public List<Donor> findAllByBlogId(Integer id) {
        return dao.findAllByBlogId(id);
    }

    @Override
    public Donor create(Donor donor) {
        return dao.save(donor);
    }
}
