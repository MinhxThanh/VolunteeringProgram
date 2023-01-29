package edu.home.service;

import javax.mail.MessagingException;

import edu.home.common.entity.MailInfoForgotPassword;


public interface MailerService {
    void sendMailForgotPassword(MailInfoForgotPassword mail) throws MessagingException;

}
