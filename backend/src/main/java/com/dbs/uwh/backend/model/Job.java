package com.dbs.uwh.backend.model;

import javax.persistence.Entity;
import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Job extends BaseEntity {

	private static final long serialVersionUID = 1595341432990282640L;

	@NotNull
	private String title;
	
	@NotNull
	private String description;
	
	@NotNull
	private String status;
	
	@NotNull
	private String skills;
	
	@NotNull
	private String company;
		
}
