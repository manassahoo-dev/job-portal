package com.dbs.uwh.backend.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Embeddable
@Data
@EqualsAndHashCode(callSuper = false)
public class StudentQuizId implements Serializable {

	private static final long serialVersionUID = 1L;

	@Column(name = "student_id")
    private Long studentId;
 
    @Column(name = "quiz_id")
    private Long quizId;
}
