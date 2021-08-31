package com.dbs.uwh.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dbs.uwh.backend.model.StudentJob;

import io.swagger.annotations.Api;

@RestController
@RequestMapping("/studentJob")
@Api(tags = "Student Job", value = "studentJob", description = "Student Job API")
public class StudentJobController extends GenericRestController<StudentJob, Long> {

}
