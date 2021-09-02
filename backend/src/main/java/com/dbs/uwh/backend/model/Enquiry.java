package com.dbs.uwh.backend.model;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

import org.hibernate.annotations.CreationTimestamp;

import com.dbs.uwh.backend.model.constant.Gender;
import com.dbs.uwh.backend.model.constant.Status;
import com.sun.istack.NotNull;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Enquiry extends BaseEntity {

	private static final long serialVersionUID = 1L;

	@NotNull
	private Gender gender;

	@NotNull
	private String studentName;

	private LocalDate dob;

	private String mailId;

	private String studentType;

	private String studentFatherName;

	private String idProof;
	private String idNumber;

	@CreationTimestamp
	@Column(insertable = true, updatable = false)
	private Timestamp createdOn;

	private Long phoneNumber;
	private Long aadhaarNumber;

	private String address;
	private String skills;
	
	@NotNull
	@Enumerated(EnumType.STRING)
	private Status status = Status.INPROGRESS;

	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "enq_id")
	private List<EnquiryQuestion> questions;
	
	

}
