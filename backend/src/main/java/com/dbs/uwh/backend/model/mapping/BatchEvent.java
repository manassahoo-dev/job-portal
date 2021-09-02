
package com.dbs.uwh.backend.model.mapping;

import java.sql.Timestamp;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.CreationTimestamp;

import com.dbs.uwh.backend.model.BaseEntity;
import com.dbs.uwh.backend.model.constant.Status;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class BatchEvent extends BaseEntity {

	private static final long serialVersionUID = 1L;

	private Long batchId;

	@NotNull
	private String name;

	@NotNull
	@Enumerated(EnumType.STRING)
	private Status status = Status.NOTSTARTED;

	@Temporal(TemporalType.DATE)
	private Date eventDate;

	@CreationTimestamp
	@Column(insertable = true, updatable = false)
	private Timestamp createdOn;
}
