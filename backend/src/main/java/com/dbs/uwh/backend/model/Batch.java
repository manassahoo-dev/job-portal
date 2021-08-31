
package com.dbs.uwh.backend.model;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotNull;

import com.dbs.uwh.backend.model.constant.Status;
import com.dbs.uwh.backend.model.mapping.BatchCounselling;
import com.dbs.uwh.backend.model.mapping.BatchCourse;
import com.dbs.uwh.backend.model.mapping.BatchEvent;
import com.dbs.uwh.backend.model.mapping.BatchQuiz;
import com.dbs.uwh.backend.model.mapping.BatchSkillSet;
import com.dbs.uwh.backend.model.mapping.BatchVolunteering;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(uniqueConstraints = { @UniqueConstraint(columnNames = { "name" }, name = "uk_name") })
public class Batch extends BaseEntity {

	private static final long serialVersionUID = 1L;

	@NotNull
	private String name;

	@NotNull
	@Enumerated(EnumType.STRING)
	private Status status = Status.NOTSTARTED;

	@Temporal(TemporalType.DATE)
	private Date startDate;

	@Temporal(TemporalType.DATE)
	private Date endDate;

	@JsonIgnore
	@OneToMany(mappedBy = "batch", cascade = CascadeType.ALL, orphanRemoval = true)
	private Set<BatchCourse> courses = new HashSet<>();

	@JsonIgnore
	@OneToMany(mappedBy = "batch", cascade = CascadeType.ALL, orphanRemoval = true)
	private Set<BatchVolunteering> volunteerings = new HashSet<>();

	@JsonIgnore
	@OneToMany(mappedBy = "batch", cascade = CascadeType.ALL, orphanRemoval = true)
	private Set<BatchQuiz> quizes = new HashSet<>();

	@JsonIgnore
	@OneToMany(mappedBy = "batch", cascade = CascadeType.ALL, orphanRemoval = true)
	private Set<BatchCounselling> counsellings = new HashSet<>();

	@JsonIgnore
	@OneToMany(mappedBy = "batch", cascade = CascadeType.ALL, orphanRemoval = true)
	private Set<BatchSkillSet> skillSets = new HashSet<>();

	@JsonIgnore
	@OneToMany(mappedBy = "batch", cascade = CascadeType.ALL, orphanRemoval = true)
	private Set<BatchEvent> events = new HashSet<>();

}
