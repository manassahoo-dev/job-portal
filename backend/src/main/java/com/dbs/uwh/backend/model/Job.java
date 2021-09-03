package com.dbs.uwh.backend.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.OneToMany;
import javax.persistence.Transient;

import com.dbs.uwh.backend.model.constant.Status;
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
	@Enumerated(EnumType.STRING)
	private Status status = Status.NOTSTARTED;
	
	@NotNull
	@Column
	private String experience;

	@NotNull
	@Column
	private String jobLocation;
	
	@NotNull
	@Column
	private String companyName;
	
	@Column(columnDefinition = "TEXT")
	private String aboutCompany;

	@NotNull
	@Column(columnDefinition = "TEXT")
	private String eligibilityCriteria;

	@Column(columnDefinition = "TEXT")
	private String rolesAndResponsibilities;
	
	@Column(columnDefinition = "TEXT")
	private String jobDescription;


	@NotNull
	@Column
	private String salaryRange;
	
	@JsonIgnore
	@OneToMany(mappedBy = "job", cascade = CascadeType.ALL)
	private Set<JobCategory> categories = new HashSet<>();
	
	@Transient
	private Long categoryId;
}
