package com.dbs.uwh.backend.model;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Transient;

import com.sun.istack.NotNull;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class StudentJob extends BaseEntity {

	private static final long serialVersionUID = 1L;

	@NotNull
	@OneToOne
	@JoinColumn(name = "job_id")
	private Job job;

	@NotNull
	@OneToOne
	@JoinColumn(name = "student_id")
	private Student student;

	private boolean isApplied=false;

	private LocalDate appliedDate;

	private boolean isInterviewed=false;

	private LocalDate interviewedDate;

	private boolean isPlaced=false;

	private LocalDate placedDate;

}
