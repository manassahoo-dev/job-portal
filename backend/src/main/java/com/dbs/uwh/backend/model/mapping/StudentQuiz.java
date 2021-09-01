
package com.dbs.uwh.backend.model.mapping;

import java.time.LocalDate;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;

import com.dbs.uwh.backend.model.Quiz;
import com.dbs.uwh.backend.model.User;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class StudentQuiz {

	@EmbeddedId
	private StudentQuizId id;

	@ManyToOne
	@MapsId("studentId")
	private User student;

	@ManyToOne
	@MapsId("quizId")
	private Quiz quiz;
	
	private Long batchId;

	private LocalDate createdOn;
	
	private Double score;
}
