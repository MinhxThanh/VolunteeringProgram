package edu.home.service;

import edu.home.common.create.InfoAccount;
import edu.home.common.create.InfoBasic;
import edu.home.entity.Account;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserService implements UserDetailsService {
    @Autowired
    private AccountService accountService;
    @Autowired
    private BCryptPasswordEncoder passwordEncoder;
    @Autowired
    private InfoAccount infoAccount;

    @Override
    public UserDetails loadUserByUsername(String username){
        Account account = accountService.findByUsernameOrEmail(username);
        try {

            System.out.println("loadUserByUsername Username: " + account.getEmail());
            System.out.println("Password: " + account.getPassword());

            //Create userDetail from account
            String password = account.getPassword();
            String[] roles = account.getAuthorities().stream()
                    .map(a -> a.getRole().getId())
                    .collect(Collectors.toList()).toArray(new String[0]);
//            String accessToken = "Bearer " +  jwtTokenUtil.generateAccessToken(account.getEmail());
            return User.withUsername(username)
                    .password(password)
                    .roles(roles).build();
        }catch (Exception e){
            e.printStackTrace();
            System.out.println("Exception Username 3: " +username);
            throw new UsernameNotFoundException(username + "not found!");
        }
    }

    public void loginFromOAuth2(OAuth2AuthenticationToken oauth2) {
        System.out.println("auth2: " + oauth2.getName());
        String username = oauth2.getPrincipal().getAttribute("name");
        String email = oauth2.getPrincipal().getAttribute("email");
        String password = oauth2.getPrincipal().getName();
        String firstName = oauth2.getPrincipal().getAttribute("given_name");
        String lastName = oauth2.getPrincipal().getAttribute("family_name");
        String image = oauth2.getPrincipal().getAttribute("picture");
        System.out.println("Login with: " + oauth2.getAuthorizedClientRegistrationId());
        System.out.println("First name: " + firstName);
        System.out.println("Last name: " + lastName);
        System.out.println("username: " + username);
        if (lastName == null) {
            lastName = "last name!";
            System.out.println("Last name1: " + lastName);
        }


//        String accessToken = "Bearer " +  jwtTokenUtil.generateAccessToken(email);
        if (accountService.findByUsernameOrEmail(email) != null){
            System.out.println("This email already exists in data!");
        }else {
            infoAccount.createAccount(email, passwordEncoder.encode(password), username, firstName, lastName, image, new InfoBasic().createInfoGuestRoleOfTableRole());
        }

        UserDetails userDetails = User.withUsername(email)
                .password(passwordEncoder.encode(password)).roles("GUEST").build();
        Authentication authentication = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
        SecurityContextHolder.getContext().setAuthentication(authentication);
    }
}
