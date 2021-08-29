package com.dbs.uwh.backend.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import com.sun.istack.NotNull;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@NoArgsConstructor

public class DatabaseFile extends BaseEntity {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@NotNull
	private boolean isActive;

	@Lob
	private byte[] data;

	private String fileName;

	private String fileType;

	@CreationTimestamp
	@Temporal(TemporalType.TIMESTAMP)
	private Date createdOn;

	@UpdateTimestamp
	@Temporal(TemporalType.TIMESTAMP)
	private Date modifiedOn;

	public DatabaseFile(String fileName, String fileType, byte[] data) {
		this.fileName = fileName;
		this.fileType = fileType;
		this.data = data;
	}

}
