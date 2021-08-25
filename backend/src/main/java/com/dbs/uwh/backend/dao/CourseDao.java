package com.dbs.uwh.backend.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.dbs.uwh.backend.model.Course;

@Repository
public interface CourseDao extends GenericDao<Course, Long> {

	List<Course> findByCategories_categoryId(Long categoryId);
	List<Course> findByBatches_batchId(Long batchId);

	boolean existsCourseByCategories_categoryIdAndCategories_courseId(Long categoryId, Long courseId);

	@Modifying
	@Transactional
	@Query(value="DELETE FROM course_category WHERE course_id = ?1", nativeQuery=true)
	public void deleteCourseCategory(Long courseId);
	
	@Modifying
	@Transactional
	@Query(value="INSERT INTO course_category (category_id, course_id) VALUES (?1, ?2)", nativeQuery=true)
	public void saveCourseCategory(Long categoryId, Long courseId);
}
