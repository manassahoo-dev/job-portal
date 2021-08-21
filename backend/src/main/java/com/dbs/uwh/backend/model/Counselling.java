package com.dbs.uwh.backend.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

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

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "category_id")
	private Category category;

	@NotNull
	private boolean counsellingStatus;

}
