package edu.home.entity;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;


/**
 * The persistent class for the blog_image database table.
 * 
 */
@Entity
@Table(name="blog_image")
@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class BlogImage implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	//bidirectional many-to-one association to Blog
	@ManyToOne
	private Blog blog;

	//bidirectional many-to-one association to Image
	@ManyToOne
	private Image image;
}