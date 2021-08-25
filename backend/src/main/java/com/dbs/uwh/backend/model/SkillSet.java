package com.dbs.uwh.backend.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Transient;

import com.dbs.uwh.backend.model.mapping.SkillSetCategory;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.istack.NotNull;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString(of = { "name", "skills" })
public class SkillSet extends BaseEntity {
	private static final long serialVersionUID = 1L;

	@NotNull
	private String name;

	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
	@JoinColumn(name = "skill_set_id")
	private Set<Skill> skills = new HashSet<>();
	
	@JsonIgnore
	@OneToMany(mappedBy = "skillSet", cascade = CascadeType.ALL)
	private Set<SkillSetCategory> categories = new HashSet<>();

	@Transient
	private Long categoryId;
}
