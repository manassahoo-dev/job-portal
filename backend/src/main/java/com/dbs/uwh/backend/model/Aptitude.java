package com.dbs.uwh.backend.model;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

import com.sun.istack.NotNull;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Data
@EqualsAndHashCode(callSuper = false)
public class Aptitude extends BaseEntity {

	private static final long serialVersionUID = 1L;

	@NotNull
	private String name;

	@Column(columnDefinition = "TEXT")
	private String description;

	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "aptitude_id")
	private Set<Question> questions;
}
