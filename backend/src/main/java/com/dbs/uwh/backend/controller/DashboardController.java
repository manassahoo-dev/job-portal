package com.dbs.uwh.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dbs.uwh.backend.model.DashboardResponse;
import com.dbs.uwh.backend.service.BatchService;
import com.dbs.uwh.backend.service.CourseService;
import com.dbs.uwh.backend.service.EnquiryService;
import com.dbs.uwh.backend.service.JobService;
import com.dbs.uwh.backend.service.StudentService;

import io.swagger.annotations.Api;

@RestController
@Api(tags = "Dashboard", value = "dashboard", description = "dashboard API")
public class DashboardController {

	@Autowired
	StudentService studentService;

	@Autowired
	BatchService batchService;
	
	@Autowired
	CourseService courseService;
	
	@Autowired
	JobService jobService;	
	
	@Autowired
	EnquiryService enquiryService;

	@RequestMapping("/dashboard")
	public DashboardResponse getDashboardStats() {
		DashboardResponse dashboardResponse = new DashboardResponse();
		dashboardResponse.setStudentStats(studentService.StudentsStats());
		dashboardResponse.setBatchStats(batchService.BatchStats());
		dashboardResponse.setCourseStats(courseService.CourseStats());
		dashboardResponse.setJobStats(jobService.JobStats());
		dashboardResponse.setEnquiryStats(enquiryService.enquiryStats());
		return dashboardResponse;
	}

}
