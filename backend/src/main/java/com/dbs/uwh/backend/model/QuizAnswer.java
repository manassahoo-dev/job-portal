package com.dbs.uwh.backend.model;

import javax.persistence.Column;
import javax.persistence.Entity;

import com.sun.istack.NotNull;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString(of = { "text" })
public class QuizAnswer extends BaseEntity {
	private static final long serialVersionUID = 1L;

	@NotNull
	@Column(columnDefinition = "TEXT")
	private String text;

	private boolean correct;
}
