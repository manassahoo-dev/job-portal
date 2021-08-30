package com.dbs.uwh.backend.dao;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.dbs.uwh.backend.model.Attendance;

@Repository
public interface AttendanceDao extends GenericDao<Attendance, Long> {
	
	
	List<Attendance> findByBatchIdAndCourseId(@Param("batch_id") Long batchId,@Param("course_id") Long courseId);

	@Query(value = "select distinct date from attendance WHERE batch_id = ?1 and course_id=?2", nativeQuery = true)
	public List<Date> findBatchIdAndCourseIdDistinctDates(Long batchId, Long courseId);
	
	@Query(value = "select * from attendance WHERE batch_id = ?1 and course_id=?2  group by attendance_date",nativeQuery=true)
	public List<Attendance> findAllByBatchIdAndCourseIdGroupByDate(Long batchId, Long courseId);
}
