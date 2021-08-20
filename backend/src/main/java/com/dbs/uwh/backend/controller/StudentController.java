package com.dbs.uwh.backend.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.dbs.uwh.backend.model.Student;
import com.dbs.uwh.backend.service.StudentService;

import io.swagger.annotations.Api;

@RestController
@RequestMapping("/students")
@Api(tags = "Students", value = "students", description = "Students API")
public class StudentController extends GenericRestController<Student, Long> {
	@Autowired
	private StudentService studentService;

	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Student create(@RequestBody @Valid Student student) {
		studentService.createStudent(student);
		return student;
	}
	
	
	
}
