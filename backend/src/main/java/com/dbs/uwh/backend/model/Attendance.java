package com.dbs.uwh.backend.model;

import java.time.LocalDate;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.Transient;

import com.sun.istack.NotNull;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Attendance extends BaseEntity {
	private static final long serialVersionUID = 1L;

	@NotNull
	private boolean isPresent;

	@NotNull
	private LocalDate date;

	private Long batchId;

	private Long courseId;

	private Long studentId;
	
	@Transient
	private Set<Long> studentIds;
	

}
