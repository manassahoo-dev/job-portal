package com.dbs.uwh.backend.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;

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

	@Column(name = "created_on")
	private Date createdOn = new Date();
}
