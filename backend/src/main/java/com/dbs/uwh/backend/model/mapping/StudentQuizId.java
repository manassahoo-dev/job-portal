
package com.dbs.uwh.backend.model.mapping;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

import lombok.Getter;
import lombok.Setter;

@Embeddable
@Getter
@Setter
public class StudentQuizId implements Serializable {

	private static final long serialVersionUID = 1L;

	@Column(name = "student_id")
	private Long studentId;

	@Column(name = "quiz_id")
	private Long quizId;
	
}
