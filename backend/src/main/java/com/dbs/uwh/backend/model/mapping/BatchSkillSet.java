
package com.dbs.uwh.backend.model.mapping;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;

import org.hibernate.annotations.CreationTimestamp;

import com.dbs.uwh.backend.model.Batch;
import com.dbs.uwh.backend.model.SkillSet;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class BatchSkillSet {

	@EmbeddedId
	private BatchCourseId id;

	@ManyToOne
	@MapsId("batchId")
	private Batch batch;

	@ManyToOne
	@MapsId("skillSetId")
	private SkillSet skillSet;

	@CreationTimestamp
	@Column(name = "created_on", insertable = true, updatable = false)
	private Timestamp createdOn;
}
