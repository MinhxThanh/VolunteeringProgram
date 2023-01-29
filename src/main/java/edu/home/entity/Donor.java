package edu.home.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;


/**
 * The persistent class for the donor database table.
 * 
 */
@Entity
@Table(name="donor")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Donor implements Serializable {
	@Id
	private int id;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="create_date")
	private Date createDate;

	private float donated;

	@Column(name="full_name")
	private String fullName;

	private String phone;

	@ManyToOne
	private Blog blog;
}