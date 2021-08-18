package com.dbs.uwh.backend.model;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import com.sun.istack.NotNull;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Student extends User {
	private int age;

	
	private String fatherName;
	private String motherName;
	private String course;
	private String idProof;

	@NotNull
	@Enumerated(EnumType.STRING)
	private Gender gender;
}
