package com.dbs.uwh.backend.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.dbs.uwh.backend.model.Job;

@Repository
public interface JobDao extends GenericDao<Job, Long> {
	List<Job> findByCategories_categoryId(Long categoryId);

	boolean existsJobByCategories_categoryIdAndCategories_jobId(Long categoryId, Long jobId);

	@Modifying
	@Transactional
	@Query(value = "DELETE FROM job_category WHERE job_id = ?1", nativeQuery = true)
	public void deleteJobCategory(Long jobId);

	@Modifying
	@Transactional
	@Query(value = "INSERT INTO job_category (category_id, job_id) VALUES (?1, ?2)", nativeQuery = true)
	public void saveJobCategory(Long categoryId, Long jobId);

	@Modifying
	@Transactional
	@Query(value = "INSERT INTO student_job (job_id,student_id,is_applied,applied_date,is_interviewed,is_placed) VALUES (?1, ?2,true,Now(),false,false) ", nativeQuery = true)
	public void saveStudentJobApplied(Long jobId, Long studentId);

	@Modifying
	@Transactional
	@Query(value = "INSERT INTO student_job (job_id,student_id,is_interviewed,interviewed_date,is_applied,is_placed) VALUES (?1, ?2,true,Now(),false,false) ", nativeQuery = true)
	public void saveStudentInterviewed(Long jobId, Long studentId);

	@Modifying
	@Transactional
	@Query(value = "INSERT INTO student_job (job_id,student_id,is_placed,placed_date,is_applied,is_interviewed) VALUES (?1, ?2,true,Now(),false,false) ", nativeQuery = true)
	public void saveStudentJobPlaced(Long jobId, Long studentId);
	
	@Query(value = "select student_id from student_job where job_id=?1 and is_applied=true", nativeQuery = true)
	public List<Long> getStudentJobDetailByJobIdAndJobApplied(Long jobId);

	@Query(value = "select student_id from student_job where job_id=?1 and is_interviewed=true", nativeQuery = true)
	public List<Long> getStudentJobDetailByJobIdAndInterviewed(Long jobId);
	
	@Query(value = "select student_id from student_job where job_id=?1 and is_placed=true", nativeQuery = true)
	public List<Long> getStudentJobDetailByJobIdAndPlaced(Long jobId);
}
