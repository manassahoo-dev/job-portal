package com.dbs.uwh.backend.controller;

import java.io.Serializable;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.dbs.uwh.backend.model.BaseEntity;
import com.dbs.uwh.backend.service.GenericService;
import com.dbs.uwh.backend.util.RestPreconditions;

public abstract class GenericRestController<T extends BaseEntity, ID extends Serializable> {
	@Autowired
	private GenericService<T, ID> genericService;

	@GetMapping
	public List<T> findAll() {
		return genericService.findAll();
	}

	@GetMapping(value = "/{id}")
	public T findById(@PathVariable("id") ID id) {
		return RestPreconditions.checkFound(genericService.findById(id));
	}

	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public T create(@RequestBody @Valid T entity) {
		return genericService.create(entity);
	}

	@PutMapping(value = "/{id}")
	@ResponseStatus(HttpStatus.OK)
	public void update(@PathVariable("id") ID id, @RequestBody T entity) {
		RestPreconditions.checkNotNull(genericService.findById(id));
		genericService.update(entity);
	}

	@DeleteMapping(value = "/{id}")
	@ResponseStatus(HttpStatus.OK)
	public void delete(@PathVariable("id") ID id) {
		genericService.deleteById(id);
	}
	
	@PostMapping(value = "/exists")
	public boolean exists(@RequestBody T entity) {
		return genericService.exists(entity);
	}
	
	@PostMapping(value = "/find")
	public T findOne(@RequestBody T entity) {
		return genericService.findOne(entity);
	}

}
