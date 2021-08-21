package com.dbs.uwh.backend.model;

import javax.persistence.Embeddable;
import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.Setter;

@Embeddable
@Getter
@Setter
public class Address {

	private String state;

	@NotNull
	private int pincode;

	private String address;

}
