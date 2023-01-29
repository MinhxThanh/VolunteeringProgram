package edu.home.service.impl;


import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import edu.home.common.entity.MailInfoForgotPassword;
import edu.home.common.utill.FormMailForgotPassword;
import edu.home.service.MailerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.spring5.SpringTemplateEngine;

@Service
public class MailerServiceImpl implements MailerService {
    private MailInfoForgotPassword mailInfoForgotPassword = new MailInfoForgotPassword();
    @Autowired
    private JavaMailSender sender;
    @Autowired
    private FormMailForgotPassword formMailForgotPassword;

    @Override
    public void sendMailForgotPassword(MailInfoForgotPassword mail) throws MessagingException {
        String html = formMailForgotPassword.content(mail.getUsername(), mail.getTo());
        MimeMessage message = sender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true, "utf-8");

        helper.setFrom(mail.getFrom());
        helper.setTo(mail.getTo());
        helper.setSubject(mail.getSubject());
        helper.setText(html, true);
        helper.setReplyTo(mail.getFrom());

        // Gửi message đến SMTP server
        sender.send(message);
        System.out.println("send!!!!!!!");

    }
}
