package com.dbs.uwh.backend.service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

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
		Long studentId = null;
		List<Attendance> allStudentsAttendanceData = attendanceDao.findAll();

		if (!CollectionUtils.isEmpty(allStudentsAttendanceData)) {

			for (Attendance studentAttendanceData : allStudentsAttendanceData) {

				studentId = studentAttendanceData.getStudentId();

				Long batchId = studentAttendanceData.getBatchId();

				attendanceResponse.setDate(studentAttendanceData.getAttendanceDate());

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
					System.out.println("P" + isPresentCount + "A" + isAbsent);
					attendanceResponse.setStats("P" + isPresentCount + "A" + isAbsent);
				} else {
					isAbsent++;
					attendanceResponse.setStats("P" + isPresentCount + "A" + isAbsent);
					System.out.println("P" + isPresentCount + "A" + isAbsent);
				}
				attendanceResponses.add(attendanceResponse);
			}

		}

		List<AttendanceResponse> sortedList = attendanceResponses.stream()
				.sorted(Comparator.comparing(AttendanceResponse::getDate)).collect(Collectors.toList());

		return sortedList;

	}

	public List<AttendanceResponse> getStudentAttendanceDataByBatchAndCourse(Long batchId, Long courseId) {
		List<AttendanceResponse> attendanceResponses = new ArrayList<>();
		int presentCount = 0;
		int absentCount = 0;

		List<Attendance> studentsDataByDate = attendanceDao.findByBatchIdAndCourseId(batchId, courseId);

		if (!CollectionUtils.isEmpty(studentsDataByDate)) {

			for (Attendance attendance : studentsDataByDate) {
				AttendanceResponse attendanceResponse = new AttendanceResponse();
				if (!attendance.isPresent()) {
					absentCount++;
					attendanceResponse.setAbsentCount(String.valueOf(absentCount));
					attendanceResponse.setPresentCount(String.valueOf(presentCount));
					attendanceResponse.setDate(attendance.getAttendanceDate());
					attendanceResponses.add(attendanceResponse);
				} else {
					presentCount++;
					attendanceResponse.setPresentCount(String.valueOf(presentCount));
					attendanceResponse.setAbsentCount(String.valueOf(absentCount));
					attendanceResponse.setDate(attendance.getAttendanceDate());
					attendanceResponses.add(attendanceResponse);
				}
			}

		}

		List<AttendanceResponse> sortedResponse = attendanceResponses.stream()
				.sorted(Comparator.comparing(AttendanceResponse::getDate).reversed()).collect(Collectors.toList());

		return sortedResponse;

	}

}
