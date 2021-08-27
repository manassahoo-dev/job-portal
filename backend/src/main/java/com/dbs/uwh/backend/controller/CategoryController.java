package com.dbs.uwh.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dbs.uwh.backend.model.Category;
import com.dbs.uwh.backend.model.CategoryCount;
import com.dbs.uwh.backend.service.CategoryService;

import io.swagger.annotations.Api;

@RestController
@RequestMapping("/categories")
@Api(tags = "categories", value = "categories", description = "categories API")
public class CategoryController extends GenericRestController<Category, Long> {
	
	@Autowired
	private CategoryService categoryService;
	
	@GetMapping(value = "/APTITUDE")
	public List<CategoryCount> groupByAptitudeCount() {
		return categoryService.groupByAptitudeCount();
	}
	
	@GetMapping(value = "/EXAM")
	public List<CategoryCount> groupByExamCount() {
		return categoryService.groupByExamCount();
	}
	
	@GetMapping(value = "/course")
	public List<CategoryCount> groupByCourseCount() {
		return categoryService.groupByCourseCount();
	}
	
	@GetMapping(value = "/counselling")
	public List<CategoryCount> groupByCounsellingCount() {
		return categoryService.groupByCounsellingCount();
	}
	
	@GetMapping(value = "/job")
	public List<CategoryCount> groupByJobCount() {
		return categoryService.groupByJobCount();
	}
	
	@GetMapping(value = "/skill")
	public List<CategoryCount> groupBySkillCount() {
		return categoryService.groupBySkillCount();
	}

}
