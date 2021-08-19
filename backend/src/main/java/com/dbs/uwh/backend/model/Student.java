package com.dbs.uwh.backend.model;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.PrimaryKeyJoinColumn;

import com.sun.istack.NotNull;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
@Entity
@PrimaryKeyJoinColumn(name = "ID")
public class Student extends BaseEntity {
	private static final long serialVersionUID = 1L;

	private int age;

	private String fatherName;
	private String motherName;
	private String course;
	private String idProof;

	@NotNull
	@Enumerated(EnumType.STRING)
	private Gender gender;
}
