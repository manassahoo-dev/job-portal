package com.dbs.uwh.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dbs.uwh.backend.model.Counselling;
import com.dbs.uwh.backend.service.CounsellingService;

import io.swagger.annotations.Api;

@RestController
@RequestMapping("/counselling")
@Api(tags = "Counselling", value = "Counselling", description = "Counselling API")
public class CounsellingController extends GenericRestController<Counselling, Long> {
	@Autowired
	private CounsellingService counsellingService;

	@GetMapping(value = "/category/{id}")
	public List<Counselling> findByCategoryId(@PathVariable("id") Long id) {
		return counsellingService.findByCategoryId(id);
	}
}
