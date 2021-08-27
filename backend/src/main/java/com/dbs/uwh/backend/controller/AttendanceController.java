package com.dbs.uwh.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dbs.uwh.backend.model.Attendance;
import com.dbs.uwh.backend.response.AttendanceResponse;
import com.dbs.uwh.backend.service.AttendanceService;

import io.swagger.annotations.Api;

@RestController
@RequestMapping("/attendance")
@Api(tags = "Attendance", value = "attendance", description = "Students Attendance API")
public class AttendanceController extends GenericRestController<Attendance, Long> {

	@Autowired
	private AttendanceService attendanceService;

	@GetMapping("/allstudents")
	public List<AttendanceResponse> getAllStudentsData() {
		return attendanceService.getAllStudentAttendanceData();

	}

}
