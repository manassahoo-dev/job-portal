
package com.dbs.uwh.backend.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;

import com.dbs.uwh.backend.model.mapping.BatchVolunteering;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.istack.NotNull;

import lombok.Getter;
import lombok.Setter;

@Entity

@Getter

@Setter
public class Volunteering extends BaseEntity {

	private static final long serialVersionUID = 1L;

	@NotNull
	private String name;

	@Column(columnDefinition = "TEXT")
	private String description;

	@JsonIgnore

	@OneToMany(mappedBy = "volunteering", cascade = CascadeType.ALL, orphanRemoval = true)
	private Set<BatchVolunteering> batches = new HashSet<>();
}
