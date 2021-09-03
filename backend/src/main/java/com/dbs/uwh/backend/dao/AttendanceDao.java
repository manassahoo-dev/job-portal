package com.dbs.uwh.backend.dao;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.dbs.uwh.backend.model.Attendance;

@Repository
public interface AttendanceDao extends GenericDao<Attendance, Long> {
	boolean existsAttendanceByBatchIdAndCourseIdAndStudentIdAndAttendanceDate(Long batchId, Long courseId,
			Long studentId, LocalDate attendanceDate);

	List<Attendance> findByBatchIdAndCourseId(@Param("batch_id") Long batchId, @Param("course_id") Long courseId);

	@Query(value = "select distinct date from attendance WHERE batch_id = ?1 and course_id=?2", nativeQuery = true)
	public List<Date> findBatchIdAndCourseIdDistinctDates(Long batchId, Long courseId);

	@Query(value = "select * from attendance WHERE batch_id = ?1 and course_id=?2  group by attendance_date", nativeQuery = true)
	public List<Attendance> findAllByBatchIdAndCourseIdGroupByDate(Long batchId, Long courseId);

	@Query(value = "select * from attendance WHERE batch_id = ?1 and course_id=?2  and attendance_date=?3", nativeQuery = true)
	public List<Attendance> findAllByBatchIdAndCourseIdAndDate(Long batchId, Long courseId, LocalDate date);

	@Query(value = "SELECT attendance_date, batch_id, course_id, COUNT(distinct student_id) AS cnt\n"
			+ "FROM attendance\n"
			+ "WHERE is_present = 1 AND batch_id = ?1 AND course_id = ?2\n"
			+ "GROUP BY attendance_date,batch_id, course_id\n"
			+ "ORDER BY attendance_date", nativeQuery = true)
	public List findAllByBatchIdAndCourseIdGroupByAttendanceDate(Long batchId, Long courseId);
}
