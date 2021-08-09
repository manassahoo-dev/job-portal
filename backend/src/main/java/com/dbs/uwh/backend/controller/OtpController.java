package com.dbs.uwh.backend.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.dbs.uwh.backend.model.Company;

@RestController
@RequestMapping("/otp")
public class OtpController {

	@PostMapping("/send")
	@ResponseStatus(HttpStatus.CREATED)
	public Company send(@RequestBody Company company) {
		return null;
	}
	
	@PostMapping("/verify")
	@ResponseStatus(HttpStatus.OK)
	public Company verify(@RequestBody Company company) {
		return null;
	}

}
