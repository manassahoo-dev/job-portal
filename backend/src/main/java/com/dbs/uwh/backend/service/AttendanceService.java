package com.dbs.uwh.backend.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import com.dbs.uwh.backend.dao.AttendanceDao;
import com.dbs.uwh.backend.dao.BatchDao;
import com.dbs.uwh.backend.dao.CourseDao;
import com.dbs.uwh.backend.dao.StudentDao;
import com.dbs.uwh.backend.model.Attendance;
import com.dbs.uwh.backend.model.Batch;
import com.dbs.uwh.backend.model.Course;
import com.dbs.uwh.backend.model.Student;
import com.dbs.uwh.backend.response.AttendanceResponse;

@Service
public class AttendanceService extends GenericService<Attendance, Long> {

	@Autowired
	AttendanceDao attendanceDao;

	@Autowired
	StudentDao studentDao;

	@Autowired
	BatchDao batchDao;

	@Autowired
	CourseDao courseDao;

	public List<AttendanceResponse> getAllStudentAttendanceData() {
		List<AttendanceResponse> attendanceResponses = new ArrayList<>();
		AttendanceResponse attendanceResponse = new AttendanceResponse();
		int isPresentCount = 0;
		int isAbsent = 0;
		List<Attendance> allStudentsAttendanceData = attendanceDao.findAll();

		if (!CollectionUtils.isEmpty(allStudentsAttendanceData)) {

			for (Attendance studentAttendanceData : allStudentsAttendanceData) {

				Long studentId = studentAttendanceData.getStudentId();

				Long batchId = studentAttendanceData.getBatchId();

				attendanceResponse.setDate(studentAttendanceData.getDate());

				attendanceResponse.setPresent(studentAttendanceData.isPresent());

				Optional<Student> student = studentDao.findById(studentId);

				if (student.isPresent()) {
					System.out.println("Student Data:: " + student);
					attendanceResponse.setStudentName(student.get().getFirstName());
				}

				Optional<Batch> batch = batchDao.findById(batchId);

				if (student.isPresent()) {
					System.out.println("Batch Data:: " + batch);
					attendanceResponse.setBatchName(batch.get().getName());
				}

				Optional<Course> course = courseDao.findById(batchId);

				if (course.isPresent()) {
					System.out.println("Course Data:: " + course);
					attendanceResponse.setCourseName(course.get().getName());
				}

				if (studentAttendanceData.isPresent()) {
					isPresentCount++;
					System.out.println("P" + isPresentCount+"A" + isAbsent);
					attendanceResponse.setStats("P" + isPresentCount+"A" + isAbsent);
				} else {
					isAbsent++;
					attendanceResponse.setStats("P" + isPresentCount+"A" + isAbsent);
					System.out.println("P" + isPresentCount+"A" + isAbsent);
				}
				
				attendanceResponses.add(attendanceResponse);

			}
		}
		return attendanceResponses;

	}
}
