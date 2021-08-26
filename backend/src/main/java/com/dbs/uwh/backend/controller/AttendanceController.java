package com.dbs.uwh.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.dbs.uwh.backend.model.Attendance;
import com.dbs.uwh.backend.service.AttendanceService;

import io.swagger.annotations.Api;

@RestController
@RequestMapping("/attendance")
@Api(tags = "Attendance", value = "attendance", description = "Students Attendance API")
public class AttendanceController extends GenericRestController<Attendance, Long> {

	@Autowired
	private AttendanceService attendanceService;

	@GetMapping("/attendance/getAllStudentsAttendanceData")
	@ResponseStatus(HttpStatus.CREATED)
	public Attendance create() {
		Attendance attendance=attendanceService.getAllStudentAttendanceData();
		return attendance;
	}

}
