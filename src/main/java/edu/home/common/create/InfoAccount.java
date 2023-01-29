package edu.home.common.create;

import edu.home.entity.Account;
import edu.home.entity.Authority;
import edu.home.entity.Role;
import edu.home.service.AccountService;
import edu.home.service.AuthorityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class InfoAccount {
    @Autowired
    private AuthorityService authorityService;
    @Autowired
    private AccountService accountService;

    public Account createAccount(String email, String password, String username, String firstName, String lastName, String image, Role role){
        //Create account
        Account account = new Account();

        account.setEmail(email);
        account.setUsername(username);
        account.setPassword(password);
        account.setFirstname(firstName);
        account.setLastname(lastName);
        account.setFullName(firstName + " " + lastName);
        account.setPhone("0");
        account.setBackground("//");
        account.setAvatar(image);
        account.setCreateDate(new Date());

        //Create authorization
        Authority authority = new Authority();
        authority.setRole(role);
        authority.setAccount(account);

        accountService.create(account);
        authorityService.create(authority);
        return account;
    }
}
