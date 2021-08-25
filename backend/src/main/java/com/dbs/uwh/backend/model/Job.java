package com.dbs.uwh.backend.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Transient;

import com.dbs.uwh.backend.model.mapping.JobCategory;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.istack.NotNull;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Job extends BaseEntity {

	private static final long serialVersionUID = 1L;

	@NotNull
	private String jobTitle;

	@NotNull
	@Column(columnDefinition = "TEXT")
	private String jobDescription;

	@NotNull
	@Column(columnDefinition = "TEXT")
	private String companyName;

	@NotNull
	@Column(columnDefinition = "TEXT")
	private String eligibilityCriteria;

	@NotNull
	@Column(columnDefinition = "TEXT")
	private String rolesAndResponsibilities;

	@NotNull
	@Column(columnDefinition = "TEXT")
	private String salaryRange;
	
	@JsonIgnore
	@OneToMany(mappedBy = "job", cascade = CascadeType.ALL)
	private Set<JobCategory> categories = new HashSet<>();
	
	@Transient
	private Long categoryId;
}
