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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.dbs.uwh.backend.model.Job;
import com.dbs.uwh.backend.model.StudentJob;
import com.dbs.uwh.backend.request.StudentJobRequest;
import com.dbs.uwh.backend.service.JobService;

import io.swagger.annotations.Api;

@RestController
@RequestMapping("/jobs")
@Api(tags = "Jobs", value = "Jobs", description = "Jobs API")
public class JobController extends GenericRestController<Job, Long> {
	@Autowired
	private JobService jobService;

	@GetMapping(value = "/category/{id}")
	public List<Job> findByCategoryId(@PathVariable("id") Long id) {
		return jobService.findByCategoryId(id);
	}

	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Job create(@RequestBody @Valid Job job) {
		return jobService.create(job);
	}

	@DeleteMapping(value = "/{id}")
	@ResponseStatus(HttpStatus.OK)
	public void delete(@PathVariable("id") Long id) {
		jobService.deleteById(id);
	}

	@PostMapping("/jobstudentdata")
	@ResponseStatus(HttpStatus.CREATED)
	public void createStudentJobData(@RequestBody StudentJobRequest studentJobRequest) {
		jobService.createStudentJobDetail(studentJobRequest);
	}

	@GetMapping("/jobstudentbyjobidandtype/{jobId}")
	public List<Long> getStudentJobDetailByJobIdAndType(@RequestBody @PathVariable("jobId") Long jobId,
			@RequestParam(required = true) String type) {
		return jobService.getJobStudentDetails(jobId, type);
	}

}
