package com.dbs.uwh.backend.model;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import com.sun.istack.NotNull;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Data
@EqualsAndHashCode(callSuper = false)
public class User extends BaseEntity {

	private static final long serialVersionUID = 1L;

	private String email;

	private String mobile;
	private String firstName;
	private String lastName;

	@NotNull
	@Enumerated(EnumType.STRING)
	private Role role;
}
