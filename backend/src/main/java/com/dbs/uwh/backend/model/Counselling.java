package com.dbs.uwh.backend.model;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.sun.istack.NotNull;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Data
@EqualsAndHashCode(callSuper = false)
public class Counselling extends BaseEntity {

	private static final long serialVersionUID = 1L;

	@NotNull
	private String name;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "category_id")
	private String category;

}