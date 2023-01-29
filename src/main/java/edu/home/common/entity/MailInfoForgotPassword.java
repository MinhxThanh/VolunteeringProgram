package edu.home.common.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MailInfoForgotPassword {
    private String from = "mr.minhxthanh@gmail.com";
    private String to;
    private String subject;
    private String username;
}

