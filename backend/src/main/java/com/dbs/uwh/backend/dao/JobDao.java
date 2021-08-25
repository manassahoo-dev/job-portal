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
	@Query(value="DELETE FROM job_category WHERE job_id = ?1", nativeQuery=true)
	public void deleteJobCategory(Long jobId);
	
	@Modifying
	@Transactional
	@Query(value="INSERT INTO job_category (category_id, job_id) VALUES (?1, ?2)", nativeQuery=true)
	public void saveJobCategory(Long categoryId, Long jobId);
}
