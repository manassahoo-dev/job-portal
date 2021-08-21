package com.dbs.uwh.backend.dao;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.dbs.uwh.backend.model.Batch;

@Repository
public interface BatchDao extends GenericDao<Batch, Long> {

	boolean existsBatchByCourses_courseIdAndCourses_batchId(Long courseId, Long batchId);
	
	boolean existsBatchByVolunteerings_volunteeringIdAndVolunteerings_batchId(Long volunteeringId, Long batchId);

	@Modifying
	@Transactional
	@Query(value = "DELETE FROM quiz_category WHERE quiz_id = ?1", nativeQuery = true)
	public void deleteQuizCategory(Long quizId);

	@Modifying
	@Transactional
	@Query(value = "INSERT INTO batch_course (course_id, batch_id) VALUES (?1, ?2)", nativeQuery = true)
	public void saveBatchCourse(Long courseId, Long id);
	
	@Modifying
	@Transactional
	@Query(value = "INSERT INTO batch_volunteering (course_id, volunteering_id) VALUES (?1, ?2)", nativeQuery = true)
	public void saveBatchVolunteering(Long courseId, Long id);

}
