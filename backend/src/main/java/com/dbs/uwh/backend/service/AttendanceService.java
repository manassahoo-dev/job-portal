package com.dbs.uwh.backend.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import com.dbs.uwh.backend.dao.AttendanceDao;
import com.dbs.uwh.backend.dao.BatchDao;
import com.dbs.uwh.backend.dao.CourseDao;
import com.dbs.uwh.backend.dao.StudentDao;
import com.dbs.uwh.backend.model.Attendance;
import com.dbs.uwh.backend.request.AttendanceRequest;
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
		return null;
		/*
		 * List<AttendanceResponse> attendanceResponses = new ArrayList<>();
		 * AttendanceResponse attendanceResponse = new AttendanceResponse(); int
		 * isPresentCount = 0; int isAbsent = 0; Long studentId = null; List<Attendance>
		 * allStudentsAttendanceData = attendanceDao.findAll();
		 * 
		 * if (!CollectionUtils.isEmpty(allStudentsAttendanceData)) {
		 * 
		 * for (Attendance studentAttendanceData : allStudentsAttendanceData) {
		 * 
		 * studentId = studentAttendanceData.getStudentId();
		 * 
		 * Long batchId = studentAttendanceData.getBatchId();
		 * 
		 * attendanceResponse.setDate(studentAttendanceData.getAttendanceDate());
		 * 
		 * // attendanceResponse.setPresent(studentAttendanceData.isPresent());
		 * 
		 * Optional<Student> student = studentDao.findById(studentId);
		 * 
		 * if (student.isPresent()) { System.out.println("Student Data:: " + student);
		 * attendanceResponse.setStudentName(student.get().getFirstName()); }
		 * 
		 * Optional<Batch> batch = batchDao.findById(batchId);
		 * 
		 * if (student.isPresent()) { System.out.println("Batch Data:: " + batch);
		 * attendanceResponse.setBatchName(batch.get().getName()); }
		 * 
		 * Optional<Course> course = courseDao.findById(batchId);
		 * 
		 * if (course.isPresent()) { System.out.println("Course Data:: " + course);
		 * attendanceResponse.setCourseName(course.get().getName()); }
		 * 
		 * if (studentAttendanceData.isPresent()) { isPresentCount++;
		 * System.out.println("P" + isPresentCount + "A" + isAbsent);
		 * attendanceResponse.setStats("P" + isPresentCount + "A" + isAbsent); } else {
		 * isAbsent++; attendanceResponse.setStats("P" + isPresentCount + "A" +
		 * isAbsent); System.out.println("P" + isPresentCount + "A" + isAbsent); }
		 * attendanceResponses.add(attendanceResponse); }
		 * 
		 * }
		 * 
		 * List<AttendanceResponse> sortedList = attendanceResponses.stream()
		 * .sorted(Comparator.comparing(AttendanceResponse::getDate)).collect(Collectors
		 * .toList());
		 * 
		 * return sortedList;
		 * 
		 */}

	public List<AttendanceResponse> getStudentAttendanceDataByBatchAndCourse_old(Long batchId, Long courseId) {
		List<AttendanceResponse> attendanceResponses = new ArrayList<>();
		int presentCount = 0;
		int absentCount = 0;
		LocalDate previousDate = null;
		List<Attendance> studentsDataByDate = attendanceDao.findByBatchIdAndCourseId(batchId, courseId);

		if (!CollectionUtils.isEmpty(studentsDataByDate)) {

			for (Attendance attendance : studentsDataByDate) {
				AttendanceResponse attendanceResponse = new AttendanceResponse();
				if (!attendance.isPresent()) {

					if (null == previousDate) {
						previousDate = attendance.getAttendanceDate();
					}

					if (previousDate.equals(attendance.getAttendanceDate()) && previousDate != null) {
						absentCount++;
						attendanceResponse.setAbsentCount(String.valueOf(absentCount));
						attendanceResponse.setPresentCount(String.valueOf(presentCount));
						attendanceResponse.setDate(attendance.getAttendanceDate());
					} else {
						absentCount++;
					}

				} else {
					if (null == previousDate) {
						previousDate = attendance.getAttendanceDate();
					}
					if (previousDate.equals(attendance.getAttendanceDate()) && previousDate != null) {
						presentCount++;
						attendanceResponse.setAbsentCount(String.valueOf(absentCount));
						attendanceResponse.setPresentCount(String.valueOf(presentCount));
						attendanceResponse.setDate(attendance.getAttendanceDate());
					} else {
						presentCount++;
					}

				}

				attendanceResponses.add(attendanceResponse);
			}

		}
		Collections.sort(attendanceResponses, Comparator.comparing(AttendanceResponse::getDate));

		List<AttendanceResponse> sortedResponse = attendanceResponses.stream()
				.sorted(Comparator.comparing(AttendanceResponse::getDate).reversed()).collect(Collectors.toList());

		return sortedResponse;

	}

	public List<AttendanceResponse> getStudentAttendanceDataByBatchAndCourse(Long batchId, Long courseId) {
		List<AttendanceResponse> attendanceResponses = new ArrayList<>();

		List<Attendance> studentsDataByDate = attendanceDao.findAllByBatchIdAndCourseIdGroupByAttendanceDate(batchId,
				courseId);

		if (studentsDataByDate.size() > 0) {
			for (int i = 0; i < studentsDataByDate.size(); i++) {
				AttendanceResponse resp = new AttendanceResponse();
				int presentCount = 0;
				int absentCount = 0;
				List<Attendance> allStudentsDataOnSpecificDate = attendanceDao.findAllByBatchIdAndCourseIdAndDate(
						batchId, courseId, studentsDataByDate.get(i).getAttendanceDate());
				if (allStudentsDataOnSpecificDate.size() > 0) {

					System.out.println(studentsDataByDate.get(i).getAttendanceDate());
					System.out.println(studentsDataByDate.get(i).isPresent());
					System.out.println(studentsDataByDate.get(i).getBatchId());
					System.out.println(studentsDataByDate.get(i).getCourseId());

					for (int j = 0; j < allStudentsDataOnSpecificDate.size(); j++) {
						System.out.println(allStudentsDataOnSpecificDate.get(j).isPresent());
						System.out.println(allStudentsDataOnSpecificDate.get(j).getBatchId());
						System.out.println(allStudentsDataOnSpecificDate.get(j).getCourseId());
						System.out.println(allStudentsDataOnSpecificDate.get(j).getAttendanceDate());

						if (allStudentsDataOnSpecificDate.get(j).isPresent()) {
							presentCount++;
						} else {
							absentCount++;
						}
						resp.setAbsentCount(String.valueOf(absentCount));
						resp.setPresentCount(String.valueOf(presentCount));
						resp.setDate(studentsDataByDate.get(i).getAttendanceDate());

					}
				}
				attendanceResponses.add(resp);
			}

		}

		return attendanceResponses;

	}

	public void createAttendanceRecords(AttendanceRequest attendanceRequest) {
		for (Long studentId : attendanceRequest.getStudentIds()) {
			Attendance attendance = new Attendance();
			attendance.setAttendanceDate(attendanceRequest.getDate());
			attendance.setBatchId(attendanceRequest.getBatchId());
			attendance.setCourseId(attendanceRequest.getCourseId());
			attendance.setStudentId(studentId);
			attendance.setPresent(attendanceRequest.isPresent());

			boolean isExists = attendanceDao.existsAttendanceByBatchIdAndCourseIdAndStudentIdAndAttendanceDate(
					attendance.getBatchId(), attendance.getCourseId(), attendance.getStudentId(),
					attendance.getAttendanceDate());
			if (!isExists)
				attendanceDao.save(attendance);
		}
	}

	public List<AttendanceResponse> getDetailsBybatchCourseDate(Long batchId, Long courseId, LocalDate date) {
		List<Attendance> studentsDataByDate = attendanceDao.findAllByBatchIdAndCourseIdAndDate(batchId, courseId, date);
		int pCount = 0;
		int aCount = 0;
		System.out.println(studentsDataByDate);
		List<AttendanceResponse> attResponse = new ArrayList<>();
		for (int i = 0; i < studentsDataByDate.size(); i++) {
			studentsDataByDate.get(i).getAttendanceDate();
			studentsDataByDate.get(i).isPresent();

			System.out.println("resp::" + studentsDataByDate.get(i).getAttendanceDate());
			System.out.println(studentsDataByDate.get(i).isPresent());
			if (studentsDataByDate.get(i).isPresent()) {
				pCount++;
			} else {
				aCount++;
			}

		}
		AttendanceResponse att = new AttendanceResponse();
		att.setDate(date);
		att.setAbsentCount(String.valueOf(aCount));
		att.setPresentCount(String.valueOf(pCount));
		attResponse.add(att);
		return attResponse;
	}

}
