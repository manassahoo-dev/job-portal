package com.dbs.uwh.backend.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.dbs.uwh.backend.model.SkillSet;
import com.dbs.uwh.backend.service.SkillSetService;

import io.swagger.annotations.Api;

@RestController
@RequestMapping("/skillsets")
@Api(tags = "skillsets", value = "skillsets", description = "Skill Set API")
public class SkillSetController extends GenericRestController<SkillSet, Long> {
	@Autowired
	private SkillSetService skillSetService;

	@GetMapping(value = "/category/{id}")
	public List<SkillSet> findByCategoryId(@PathVariable("id") Long id) {
		return skillSetService.findByCategoryId(id);
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public SkillSet create(@RequestBody @Valid SkillSet skillSet) {
		return skillSetService.create(skillSet);
	}
	
	@DeleteMapping(value = "/{id}")
	@ResponseStatus(HttpStatus.OK)
	public void delete(@PathVariable("id") Long id) {
		skillSetService.deleteById(id);
	}
}
