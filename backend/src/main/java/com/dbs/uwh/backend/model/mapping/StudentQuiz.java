
package com.dbs.uwh.backend.model.mapping;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;

import org.hibernate.annotations.CreationTimestamp;

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

	@CreationTimestamp
	@Column(insertable = true, updatable = false)
	private Timestamp createdOn;
	
	private Double score;
}
