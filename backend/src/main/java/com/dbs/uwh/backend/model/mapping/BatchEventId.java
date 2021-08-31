
package com.dbs.uwh.backend.model.mapping;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

import lombok.Getter;
import lombok.Setter;

@Embeddable

@Getter

@Setter
public class BatchEventId implements Serializable {

	private static final long serialVersionUID = 1L;

	@Column(name = "batch_id")
	private Long batchId;

	@Column(name = "event_id")
	private Long eventId;
}
