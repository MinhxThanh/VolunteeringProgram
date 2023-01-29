package edu.home.service;

import edu.home.entity.Account;

import java.util.Optional;

public interface AccountService {
    Account findByUsernameOrEmail(String email);

    Account create(Account account);

    void changePasswordByEmail(String email, String encode);
}
