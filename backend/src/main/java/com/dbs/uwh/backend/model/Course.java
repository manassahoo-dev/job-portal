package com.dbs.uwh.backend.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.persistence.UniqueConstraint;

import com.dbs.uwh.backend.model.mapping.BatchCourse;
import com.dbs.uwh.backend.model.mapping.CourseCategory;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.istack.NotNull;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(uniqueConstraints = { @UniqueConstraint(columnNames = { "name" }, name = "uk_name") })
public class Course extends BaseEntity {

	private static final long serialVersionUID = 1L;

	@NotNull
	private String name;

	@Column(columnDefinition = "TEXT")
	private String description;

	@Column(columnDefinition = "TEXT")
	private String syllabus;

	@NotNull
	private Integer duration;

	@JsonIgnore
	@OneToMany(mappedBy = "course", cascade = CascadeType.ALL, orphanRemoval = true)
	private Set<BatchCourse> batches = new HashSet<>();
	
	@JsonIgnore
	@OneToMany(mappedBy = "course", cascade = CascadeType.ALL, orphanRemoval = true)
	private Set<CourseCategory> categories = new HashSet<>();

	@Column(columnDefinition = "boolean default false")
	private boolean isActive;

	@Transient
	private Long categoryId;
}
