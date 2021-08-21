package com.dbs.uwh.backend.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

import lombok.Getter;
import lombok.Setter;

@Embeddable
@Getter
@Setter
public class BatchCourseId implements Serializable {

	private static final long serialVersionUID = 1L;

	@Column(name = "batch_id")
	private Long batchId;

	@Column(name = "volunteering_id")
	private Long volunteeringId;
}
