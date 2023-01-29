package edu.home.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;


/**
 * The persistent class for the category_blog database table.
 * 
 */
@Entity
@Table(name="category_blog")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CategoryBlog implements Serializable {
	@Id
	private int id;

	//bidirectional many-to-one association to Blog
	@ManyToOne
	private Blog blog;

	//bidirectional many-to-one association to Category
	@ManyToOne
	private Category category;
}