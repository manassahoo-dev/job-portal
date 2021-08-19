package com.dbs.uwh.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dbs.uwh.backend.model.Job;

import io.swagger.annotations.Api;

@RestController
@RequestMapping("/Jobs")
@Api(tags = "Jobs", value = "Jobs", description = "Jobs API")
public class JobController extends GenericRestController<Job, Long> {
}
