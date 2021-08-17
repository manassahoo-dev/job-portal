package com.dbs.uwh.backend.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;

import com.sun.istack.NotNull;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Aptitude extends BaseEntity {
	@NotNull
	private String name;

	@Column(columnDefinition = "TEXT")
	private String description;

	@OneToMany(cascade = CascadeType.ALL)
	@JoinTable(name = "APTITUDE_QUESTION", joinColumns = {
			@JoinColumn(name = "APTITUDE_ID") }, inverseJoinColumns = { @JoinColumn(name = "QUESTION_ID") })
	private Set<Question> questions = new HashSet<Question>(0);
}
