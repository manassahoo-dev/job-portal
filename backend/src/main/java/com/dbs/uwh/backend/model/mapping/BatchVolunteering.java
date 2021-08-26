
package com.dbs.uwh.backend.model.mapping;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;

import org.hibernate.annotations.CreationTimestamp;

import com.dbs.uwh.backend.model.Batch;
import com.dbs.uwh.backend.model.Volunteering;

import lombok.Getter;
import lombok.Setter;

@Entity

@Getter

@Setter
public class BatchVolunteering {

	@EmbeddedId
	private BatchVolunteeringId id;

	@ManyToOne(fetch = FetchType.LAZY)

	@MapsId("batchId")
	private Batch batch;

	@ManyToOne(fetch = FetchType.LAZY)

	@MapsId("volunteeringId")
	private Volunteering volunteering;

	@CreationTimestamp
	@Column(name = "created_on", insertable = true, updatable = false)
	private Timestamp createdOn;
}
