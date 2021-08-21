
package com.dbs.uwh.backend.model;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;

import org.hibernate.annotations.CreationTimestamp;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class BatchCourse {

	@EmbeddedId
	private BatchCourseId id;

	@ManyToOne(fetch = FetchType.LAZY)

	@MapsId("batchId")
	private Batch batch;

	@ManyToOne(fetch = FetchType.LAZY)

	@MapsId("courseId")
	private Course course;

	
	@CreationTimestamp
	@Column(name = "created_on")
	private Timestamp createdOn ;
}
