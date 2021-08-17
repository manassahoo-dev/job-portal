package com.dbs.uwh.backend.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.sun.istack.NotNull;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Question extends BaseEntity {
	@NotNull
	@Column(columnDefinition = "TEXT")
	private String text;

	@OneToMany(cascade = CascadeType.ALL)
	@JoinTable(name = "QUESTION_ANSWER", joinColumns = { @JoinColumn(name = "QUESTION_ID") }, inverseJoinColumns = {
			@JoinColumn(name = "ANSWER_ID") })
	private Set<Answer> answers = new HashSet<Answer>(0);

	@OneToOne
	private Answer correctAnswer;
}
