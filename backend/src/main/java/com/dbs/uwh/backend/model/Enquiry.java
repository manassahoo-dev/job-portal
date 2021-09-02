package com.dbs.uwh.backend.model;

import java.util.Date;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.dbs.uwh.backend.model.constant.Gender;
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

	@Temporal(TemporalType.DATE)
	private Date dob;

	private String mailId;

	private String studentType;

	private String studentFatherName;

	private String idProof;

	private String idNumber;

	@Temporal(TemporalType.DATE)
	private Date date;

	private Long phoneNumber;
	private Long aadhaarNumber;

	private String state;
	private String skills;

	private Long pinCode;

	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "enq_id")
	private List<EnquiryQuestion> questions;
	
	

}
