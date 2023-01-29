package edu.home.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;


/**
 * The persistent class for the image database table.
 * 
 */
@Entity
@Table(name="images")
@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class Image implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String name;

	//bidirectional many-to-one association to BlogImage
	@JsonIgnore
	@OneToMany(mappedBy="image")
	private List<BlogImage> blogImages;
}