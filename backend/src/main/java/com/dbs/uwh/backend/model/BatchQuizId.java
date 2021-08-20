package com.dbs.uwh.backend.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Embeddable
@Data
@EqualsAndHashCode(callSuper = false)
public class BatchQuizId implements Serializable {

	private static final long serialVersionUID = 1L;

	@Column(name = "batch_id")
    private Long batchId;
 
    @Column(name = "quiz_id")
    private Long quizId;
}
