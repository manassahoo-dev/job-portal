package com.dbs.uwh.backend.model;

import javax.persistence.Embeddable;

import lombok.NonNull;

@Embeddable
public class Address {

	private String state;

	@NonNull
	private int pincode;

	private String address;

}
