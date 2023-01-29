package edu.home.service.impl;

import edu.home.entity.Authority;
import edu.home.repository.AuthorityRepository;
import edu.home.service.AuthorityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthorityServiceImpl implements AuthorityService {
    @Autowired
    private AuthorityRepository dao;

    @Override
    public Authority create(Authority authority) {
        return dao.save(authority);
    }
}
