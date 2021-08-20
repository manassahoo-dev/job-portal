package com.dbs.uwh.backend.model;

import javax.persistence.Column;
import javax.persistence.Entity;

import com.sun.istack.NotNull;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Data
@EqualsAndHashCode(callSuper = false)
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
}
