package edu.home.service.impl;

import edu.home.entity.Account;
import edu.home.repository.AccountRepository;
import edu.home.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AccountServiceImpl implements AccountService {
    @Autowired
    private AccountRepository dao;

    public Account findByUsernameOrEmail(String key) {
        return dao.findByUsernameOrEmail(key);
    }


    @Override
    public Account create(Account account) {
        return dao.save(account);
    }

    @Override
    public void changePasswordByEmail(String email, String password) {
        dao.updatePasswordByEmail(password, email);
    }

}
