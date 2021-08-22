package com.dbs.uwh.backend.model.mapping;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

import lombok.Getter;
import lombok.Setter;

@Embeddable
@Getter
@Setter
public class SkillSetCategoryId implements Serializable {

	private static final long serialVersionUID = 1L;

	@Column(name = "skill_set_id")
	private Long skillSetId;

	@Column(name = "category_id")
	private Long categoryId;
}
