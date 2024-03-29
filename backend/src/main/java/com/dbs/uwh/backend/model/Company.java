package com.dbs.uwh.backend.model;

import javax.persistence.Column;
import javax.persistence.Entity;

import com.sun.istack.NotNull;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Company extends BaseEntity {

	private static final long serialVersionUID = 1L;

	@NotNull
	private String name;

	private String address;
	private String description;
	private String website;

	@Column(columnDefinition = "TEXT")
	private String aboutCompany;

	private String logo;
}
