
package com.dbs.uwh.backend.model;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.Setter;

@Entity

@Getter

@Setter

@Table(uniqueConstraints = { @UniqueConstraint(columnNames = { "name" }, name = "uk_name") })
public class Batch extends BaseEntity {

	private static final long serialVersionUID = 1L;

	@NotNull
	private String name;

	@Temporal(TemporalType.DATE)
	private Date startDate;

	@Temporal(TemporalType.DATE)
	private Date endDate;

	@JsonIgnore

	@OneToMany(mappedBy = "batch", cascade = CascadeType.ALL, orphanRemoval = true)
	private Set<BatchCourse> courses = new HashSet<>();

	/*
	 * @JsonIgnore
	 * 
	 * @OneToMany(mappedBy = "batch", cascade = CascadeType.ALL, orphanRemoval =
	 * true) private Set<BatchVolunteering> volunteerings = new HashSet<>();
	 */

	/*
	 * @JsonIgnore
	 * 
	 * @OneToMany(mappedBy = "batch", cascade = CascadeType.ALL, orphanRemoval =
	 * true) private Set<BatchCounselling> counsellings = new HashSet<>();
	 */
}
