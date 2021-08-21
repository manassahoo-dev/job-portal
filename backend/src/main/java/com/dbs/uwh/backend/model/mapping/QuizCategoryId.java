package com.dbs.uwh.backend.model.mapping;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

import lombok.Getter;
import lombok.Setter;

@Embeddable
@Getter
@Setter
public class QuizCategoryId implements Serializable {

	private static final long serialVersionUID = 1L;

	@Column(name = "quiz_id")
	private Long quizId;

	@Column(name = "category_id")
	private Long categoryId;
}
