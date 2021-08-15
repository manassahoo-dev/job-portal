package com.dbs.uwh.backend.model;

import javax.persistence.Entity;
import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Student extends BaseEntity {

	private static final long serialVersionUID = -6540762773456303208L;
	
	@NotNull
	private String name;
	
	@NotNull
	private String gender;
	
	@NotNull
	private String email;
	
	@NotNull
	private String mobile;
	
	@NotNull
	private String skills;
	
}
