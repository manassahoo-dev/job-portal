package com.dbs.uwh.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.dbs.uwh.backend.model.Course;

@RestController
@RequestMapping("/course")
public class CourseController extends GenericRestController<Course, Long> {

}
