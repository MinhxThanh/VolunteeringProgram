package edu.home.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigInteger;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;


/**
 * The persistent class for the blog database table.
 * 
 */
@Entity
@Table(name="blogs")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Blog implements Serializable {
	@Id
	private int id;

	private String content;

	private String summary;

	@Temporal(TemporalType.DATE)
	@Column(name="create_date")
	private Date createDate;

	@Column(name="donate_count")
	private float donateCount;

	private float donated;

	@Temporal(TemporalType.DATE)
	@Column(name="end_date")
	private Date endDate;

	@Column(name="goal_donate")
	private float goalDonate;

	@Column(name="is_display")
	private Boolean isDisplay;

	@Temporal(TemporalType.DATE)
	@Column(name="start_date")
	private Date startDate;

	private String title;

	@Column(name="view_count")
	private BigInteger viewCount;

	//bidirectional many-to-one association to BlogImage
	@JsonIgnore
	@OneToMany(mappedBy="blog")
	private List<BlogImage> blogImages;

	//bidirectional many-to-one association to Account
	@ManyToOne
	@JoinColumn(name="account_id")
	private Account account;

	//bidirectional many-to-one association to CategoryBlog
	@JsonIgnore
	@OneToMany(mappedBy="blog")
	private List<CategoryBlog> categoryBlogs;
}