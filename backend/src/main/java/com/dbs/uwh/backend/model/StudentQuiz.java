
package com.dbs.uwh.backend.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;

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

	@Column(name = "created_on")
	private Date createdOn = new Date();
	
	private Double score;
}
