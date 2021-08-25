package com.dbs.uwh.backend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.validation.constraints.Email;
import javax.validation.constraints.Size;

import com.dbs.uwh.backend.model.constant.Role;
import com.sun.istack.NotNull;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public class User extends BaseEntity {

	private static final long serialVersionUID = 1L;

	@Email
	@Column(unique = true)
	private String email;

	@Column(unique = true)
	@Size(max=10)
	private String mobile;

	private String firstName;
	private String lastName;

	@NotNull
	@Enumerated(EnumType.STRING)
	private Role role;
}
