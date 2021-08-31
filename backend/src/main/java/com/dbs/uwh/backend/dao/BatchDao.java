package com.dbs.uwh.backend.dao;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.dbs.uwh.backend.model.Batch;

@Repository
public interface BatchDao extends GenericDao<Batch, Long> {

	boolean existsBatchByCoursesBatchIdAndCoursesCourseId(Long batchId, Long courseId);

	boolean existsBatchByVolunteeringsBatchIdAndVolunteeringsVolunteeringId(Long batchId, Long volunteeringId);

	boolean existsBatchByQuizesBatchIdAndQuizesQuizId(Long batchId, Long quizId);

	boolean existsBatchByCounsellingsBatchIdAndCounsellingsCounsellingId(Long batchId, Long counsellingId);

	boolean existsBatchBySkillSetsBatchIdAndSkillSetsSkillSetId(Long batchId, Long skillSetId);

	@Modifying
	@Transactional
	@Query(value = "DELETE FROM quiz_category WHERE quiz_id = ?1", nativeQuery = true)
	public void deleteQuizCategory(Long quizId);

	@Modifying
	@Transactional
	@Query(value = "INSERT INTO batch_course (batch_id,course_id, created_on) VALUES (?1, ?2, NOW())", nativeQuery = true)
	public void saveBatchCourse(Long batchId, Long courseId);

	@Modifying
	@Transactional
	@Query(value = "INSERT INTO batch_volunteering (batch_id, volunteering_id, created_on) VALUES (?1, ?2, NOW())", nativeQuery = true)
	public void saveBatchVolunteering(Long batchId, Long volunteeringId);

	@Modifying
	@Transactional
	@Query(value = "INSERT INTO batch_quiz (batch_id, quiz_id, created_on) VALUES (?1, ?2, NOW())", nativeQuery = true)
	public void saveBatchQuiz(Long batchId, Long quizId);

	@Modifying
	@Transactional
	@Query(value = "INSERT INTO batch_counselling (batch_id, counselling_id, created_on) VALUES (?1, ?2, NOW())", nativeQuery = true)
	public void saveBatchCounselling(Long batchId, Long counsellingId);

	@Modifying
	@Transactional
	@Query(value = "INSERT INTO batch_skill_set (batch_id, skill_set_id, created_on) VALUES (?1, ?2, NOW())", nativeQuery = true)
	public void saveBatchSkillSet(Long batchId, Long skillSetId);
	
	@Modifying
	@Transactional
	@Query(value = "UPDATE student SET batch_id = ?1 WHERE id = ?2", nativeQuery = true)
	public void saveBatchStudent(Long batchId, Long studentId);
	
	@Modifying
	@Transactional
	@Query(value = "UPDATE student SET batch_id = null WHERE id = ?1", nativeQuery = true)
	public void deleteBatchStudent(Long studentId);
}
