package com.dbs.uwh.backend.model;

import javax.persistence.Entity;

import com.sun.istack.NotNull;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Course extends BaseEntity {
	@NotNull
	private String name;

}