
package com.dbs.uwh.backend.model.mapping;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;

import com.dbs.uwh.backend.model.Batch;
import com.dbs.uwh.backend.model.Quiz;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class BatchQuiz {

	@EmbeddedId
	private BatchQuizId id;

	@ManyToOne
	@MapsId("batchId")
	private Batch batch;

	@ManyToOne
	@MapsId("quizId")
	private Quiz quiz;

	@Column(name = "created_on")
	private Date createdOn = new Date();
}
