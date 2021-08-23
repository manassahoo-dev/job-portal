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

import com.dbs.uwh.backend.model.Course;
import com.dbs.uwh.backend.service.CourseService;

import io.swagger.annotations.Api;

@RestController
@RequestMapping("/courses")
@Api(tags = "Courses", value = "courses", description = "Courses API")
public class CourseController extends GenericRestController<Course, Long> {

	@Autowired
	private CourseService courseService;

	@GetMapping(value = "/category/{id}")
	public List<Course> findByCategoryId(@PathVariable("id") Long id) {
		return courseService.findByCategoryId(id);
	}
	
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Course create(@RequestBody @Valid Course course) {
		return courseService.create(course);
	}
	
	@DeleteMapping(value = "/{id}")
	@ResponseStatus(HttpStatus.OK)
	public void delete(@PathVariable("id") Long id) {
		courseService.deleteById(id);
	}
}
