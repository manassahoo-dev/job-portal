package com.dbs.uwh.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.dbs.uwh.backend.model.Company;
import com.dbs.uwh.backend.service.CompanyService;
import com.dbs.uwh.backend.util.RestPreconditions;

import io.swagger.annotations.Api;

@RestController
@RequestMapping("/companies")
@Api(tags = "Companies", value = "companies", description = "Companies API")
public class CompanyController {

	@Autowired
	private CompanyService companyService;

	@GetMapping
	public List<Company> findAll() {
		return companyService.findAll();
	}

	@GetMapping(value = "/{id}")
	public Company findById(@PathVariable("id") Long id) {
		return RestPreconditions.checkFound(companyService.findById(id));
	}

	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Company create(@RequestBody Company company) {
		return companyService.create(company);
	}

	@PutMapping(value = "/{id}")
	@ResponseStatus(HttpStatus.OK)
	public void update(@PathVariable("id") Long id, @RequestBody Company company) {
		RestPreconditions.checkNotNull(companyService.findById(company.getId()));
		companyService.update(company);
	}

	@DeleteMapping(value = "/{id}")
	@ResponseStatus(HttpStatus.OK)
	public void delete(@PathVariable("id") Long id) {
		companyService.deleteById(id);
	}
}
