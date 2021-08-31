package com.dbs.uwh.backend.model;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.dbs.uwh.backend.model.constant.Gender;
import com.dbs.uwh.backend.model.constant.IdProof;
import com.sun.istack.NotNull;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@PrimaryKeyJoinColumn(name = "ID")
public class Student extends User {
	private static final long serialVersionUID = 1L;

	private int age;

	private String fatherName;
	private String motherName;
	private String course;

	@NotNull
	@Enumerated(EnumType.STRING)
	private IdProof idProof;

	@NotNull
	private String idNumber;

	private String registrationNumber;

	private String studentType;

	private String highestQualification;

	private String skill;

//	private Address address;

	private float examsPercentage;

	private int interview;

	@Temporal(TemporalType.DATE)
	private Date dateOfBirth;

	@NotNull
	@Enumerated(EnumType.STRING)
	private Gender gender;

	private boolean placement;

	private boolean counselling;

	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "uploadDoc_id")
	private List<Document> documents;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "profilePic_id")
	private Document profilePic;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "batch_id")
	private Batch batch;

}
