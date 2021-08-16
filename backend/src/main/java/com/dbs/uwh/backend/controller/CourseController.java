package com.dbs.uwh.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dbs.uwh.backend.model.Course;

import io.swagger.annotations.Api;

@RestController
@RequestMapping("/courses")
@Api(tags = "Courses", value = "courses", description = "Courses API")
public class CourseController extends GenericRestController<Course, Long> {
}
