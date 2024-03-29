package com.dbs.uwh.backend.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.dbs.uwh.backend.model.Attendance;
import com.dbs.uwh.backend.request.AttendanceRequest;
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
	
	

	@PostMapping("/createattendancedata")
	@ResponseStatus(HttpStatus.CREATED)
	public void createAttendanceRecords(@RequestBody AttendanceRequest attendanceRequest) {
		attendanceService.createAttendanceRecords(attendanceRequest);
	}

	@GetMapping(value = "/by-batch-and-course")
	public List<Object> findByBatchIdAndCourseId(@RequestParam(required = true) Long batchId,
			@RequestParam(required = true) Long courseId) {
		if (batchId != null || courseId != null) {
			return attendanceService.getStudentAttendanceDataByBatchAndCourse(batchId, courseId);
		} else {
			return null;
		}

	}

	
	@GetMapping(value = "/by-batch-and-course-and-date")
	public List<AttendanceResponse> findByBatchIdCourseIdAndDate(@RequestParam(required = true) Long batchId,
			@RequestParam(required = true) Long courseId,@RequestParam(required = true) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)LocalDate date) {
		if (batchId != null || courseId != null) {
			return attendanceService.getDetailsBybatchCourseDate(batchId, courseId,date);
		} else {
			return null;
		}

	}
	
	@GetMapping(value = "/student-list-by-batch-and-course-and-date")
	public List<Attendance> findAllByBatchIdAndCourseIdAndDate(@RequestParam(required = true) Long batchId,
			@RequestParam(required = true) Long courseId,@RequestParam(required = true) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)LocalDate date) {
			return attendanceService.findAllByBatchIdAndCourseIdAndDate(batchId, courseId,date);
	}
	
	
	
	
}
