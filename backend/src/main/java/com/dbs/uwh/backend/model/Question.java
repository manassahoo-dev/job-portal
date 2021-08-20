package com.dbs.uwh.backend.model;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

import com.sun.istack.NotNull;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Question extends BaseEntity {

	private static final long serialVersionUID = 1L;

	@NotNull
	@Column(columnDefinition = "TEXT")
	private String text;
	
	@NotNull
	@Enumerated(EnumType.STRING)
	private QuestionType questionType;

	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
	@JoinColumn(name = "question_id")
	private Set<Answer> answers;

}
