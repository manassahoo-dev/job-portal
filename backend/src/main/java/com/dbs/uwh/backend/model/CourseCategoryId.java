package com.dbs.uwh.backend.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

import lombok.Getter;
import lombok.Setter;

@Embeddable
@Getter
@Setter
public class CourseCategoryId implements Serializable {

	private static final long serialVersionUID = 1L;

	@Column(name = "course_id")
	private Long courseId;

	@Column(name = "category_id")
	private Long categoryId;
}
