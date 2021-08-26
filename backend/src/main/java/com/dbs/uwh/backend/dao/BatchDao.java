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
	boolean existsBatchByQuizes_quizIdAndQuizes_batchId(Long volunteeringId, Long batchId);
	
	@Modifying
	@Transactional
	@Query(value = "DELETE FROM quiz_category WHERE quiz_id = ?1", nativeQuery = true)
	public void deleteQuizCategory(Long quizId);

	@Modifying
	@Transactional
	@Query(value = "INSERT INTO batch_course (course_id, batch_id, created_on) VALUES (?1, ?2, current_timestamp())", nativeQuery = true)
	public void saveBatchCourse(Long courseId, Long batchId);
	
	@Modifying
	@Transactional
	@Query(value = "INSERT INTO batch_volunteering (volunteering_id, batch_id, created_on) VALUES (?1, ?2, current_timestamp())", nativeQuery = true)
	public void saveBatchVolunteering(Long volunteeringId, Long batchId);
	
	@Modifying
	@Transactional
	@Query(value = "INSERT INTO batch_volunteering (quiz_id, batch_id, created_on) VALUES (?1, ?2, current_timestamp())", nativeQuery = true)
	public void saveBatchQuiz(Long quizId, Long batchId);
	

}
