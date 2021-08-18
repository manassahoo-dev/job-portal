package com.dbs.uwh.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dbs.uwh.backend.model.Student;

import io.swagger.annotations.Api;

@RestController
@RequestMapping("/Volunteers")
@Api(tags = "Volunteers", value = "Volunteers", description = "Volunteers API")
public class VolunteeringController extends GenericRestController<Student, Long> {
}
