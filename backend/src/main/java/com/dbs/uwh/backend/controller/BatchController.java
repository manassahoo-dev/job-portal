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

import com.dbs.uwh.backend.model.Batch;
import com.dbs.uwh.backend.service.BatchService;
import com.dbs.uwh.backend.util.RestPreconditions;

import io.swagger.annotations.Api;

@RestController
@RequestMapping("/batches")
@Api(tags = "Batches", value = "batches", description = "Batches API")
public class BatchController {

	@Autowired
	private BatchService batchService;

	@GetMapping
	public List<Batch> findAll() {
		return batchService.findAll();
	}

	@GetMapping(value = "/{id}")
	public Batch findById(@PathVariable("id") Long id) {
		return RestPreconditions.checkFound(batchService.findById(id));
	}

	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Batch create(@RequestBody Batch company) {
		return batchService.create(company);
	}

	@PutMapping(value = "/{id}")
	@ResponseStatus(HttpStatus.OK)
	public void update(@PathVariable("id") Long id, @RequestBody Batch company) {
		RestPreconditions.checkNotNull(batchService.findById(company.getId()));
		batchService.update(company);
	}

	@DeleteMapping(value = "/{id}")
	@ResponseStatus(HttpStatus.OK)
	public void delete(@PathVariable("id") Long id) {
		batchService.deleteById(id);
	}
}
