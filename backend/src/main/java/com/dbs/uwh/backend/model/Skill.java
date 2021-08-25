package com.dbs.uwh.backend.model;

import javax.persistence.Entity;

import com.sun.istack.NotNull;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString(of = { "skill" })
public class Skill extends BaseEntity {
	private static final long serialVersionUID = 1L;

	@NotNull
	private String skill;
}
