package com.dbs.uwh.backend.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.istack.NotNull;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Quiz extends BaseEntity {

	private static final long serialVersionUID = 1L;

	@NotNull
	private String name;

	@Column(columnDefinition = "TEXT")
	private String description;

	@NotNull
	@Enumerated(EnumType.STRING)
	private QuizType quizType;

	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "quiz_id")
	private Set<Question> questions;

	@JsonIgnore
	@OneToMany(mappedBy = "quiz", cascade = CascadeType.ALL)
	private Set<QuizCategory> categories = new HashSet<>();

	@Transient
	private Long categoryId;
}
