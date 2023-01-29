package edu.home.common.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.math.BigInteger;

@Entity
@Setter @Getter
@AllArgsConstructor @NoArgsConstructor
public class BlogsList {
    @Id
    private Integer id;
    private String title;
    private Float donated;
    private Float goalDonate;
    private Float donateCount;
    private BigInteger leftDate;
    private String username;
    private String userAvatar;
    private String blogImage;
    private Double percentDonate;
}
