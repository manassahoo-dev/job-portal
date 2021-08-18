package com.dbs.uwh.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dbs.uwh.backend.model.Student;

import io.swagger.annotations.Api;

@RestController
@RequestMapping("/students")
@Api(tags = "Students", value = "students", description = "Students API")
public class StudentController extends GenericRestController<Student, Long> {
}
