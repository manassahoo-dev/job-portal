package com.dbs.uwh.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.dbs.uwh.backend.model.Job;

@RestController
@RequestMapping("/job")
public class JobController extends GenericRestController<Job, Long> {

}
