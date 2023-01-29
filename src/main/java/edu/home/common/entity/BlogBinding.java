package edu.home.common.entity;

import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import java.math.BigInteger;
import java.time.LocalDateTime;
import java.util.Date;

@Getter @Setter
@AllArgsConstructor @NoArgsConstructor
public class BlogBinding {

    private String summary;
    private String content;

    @Temporal(TemporalType.DATE)
    @DateTimeFormat(pattern = "MM-dd-yyyy")
    private Date createDate;

    private Float donateCount;

    private Float donated;

    @Temporal(TemporalType.DATE)
    @DateTimeFormat(pattern = "MM-dd-yyyy")
    private Date endDate;

    private Float goalDonate;

    private Boolean isDisplay;

    @Temporal(TemporalType.DATE)
    @DateTimeFormat(pattern = "MM-dd-yyyy")
    private Date startDate;

    private String title;

    private BigInteger viewCount;

    private String createBy;

}
