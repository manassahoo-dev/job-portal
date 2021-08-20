package com.dbs.uwh.backend.model;

import lombok.NonNull;

public class Address {

	private String state;

	@NonNull
	private int pincode;

	private String address;

}
