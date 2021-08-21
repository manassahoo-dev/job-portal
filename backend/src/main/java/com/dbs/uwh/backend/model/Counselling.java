package com.dbs.uwh.backend.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Transient;

import com.dbs.uwh.backend.model.mapping.CounsellingCategory;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.istack.NotNull;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Counselling extends BaseEntity {

	private static final long serialVersionUID = 1L;

	@NotNull
	private String name;

	@Column(columnDefinition = "TEXT")
	private String description;

	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "counselling_id")
	private Set<CounsellingQuestion> questions;

	@JsonIgnore
	@OneToMany(mappedBy = "counselling", cascade = CascadeType.ALL)
	private Set<CounsellingCategory> categories = new HashSet<>();

	@Transient
	private Long categoryId;

}
