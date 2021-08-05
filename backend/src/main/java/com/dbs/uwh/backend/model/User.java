package com.dbs.uwh.backend.model;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import com.sun.istack.NotNull;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class User extends BaseEntity {
	@NotNull
	private String email;

	private String mobile;
	private String firstName;
	private String lastName;

	@NotNull
	@Enumerated(EnumType.STRING)
	private Role role;
}
