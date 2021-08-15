package com.dbs.uwh.backend.model;

import com.sun.istack.NotNull;

public class Course extends BaseEntity {

	private static final long serialVersionUID = 6082391690556986461L;

	@NotNull
	private String title;
	
	@NotNull
	private String description;
	
	@NotNull
	private String status;
	
	@NotNull
	private String category;
	
	@NotNull
	private String tags;
	
	@NotNull
	private String level;
	
	@NotNull
	private String rating;
	
}
