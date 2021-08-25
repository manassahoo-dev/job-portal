package com.dbs.uwh.backend.model.mapping;

import java.util.Date;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.CreationTimestamp;

import com.dbs.uwh.backend.model.Category;
import com.dbs.uwh.backend.model.SkillSet;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class SkillSetCategory {
	@EmbeddedId
	private SkillSetCategoryId id;

	@ManyToOne(fetch = FetchType.LAZY)
	@MapsId("skillSetId")
	private SkillSet skillSet;

	@ManyToOne(fetch = FetchType.LAZY)
	@MapsId("categoryId")
	private Category category;

	@CreationTimestamp
	@Temporal(TemporalType.TIMESTAMP)
	private Date createdOn;

}
