package com.dbs.uwh.backend.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;

import com.dbs.uwh.backend.model.constant.Status;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table
public class Event extends BaseEntity {
	private static final long serialVersionUID = 1L;

	@NotNull
	private String name;
	
	@NotNull
	@Enumerated(EnumType.STRING)
	private Status status = Status.NOTSTARTED;
	
	@Temporal(TemporalType.DATE)
	private Date eventDate;
}
