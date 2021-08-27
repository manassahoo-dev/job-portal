package com.dbs.uwh.backend.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.dbs.uwh.backend.model.Category;
import com.dbs.uwh.backend.model.CategoryCount;

@Repository
public interface CategoryDao extends GenericDao<Category, Long> {

	@Query(nativeQuery = true, value = "SELECT c.id, c.name, count(qc.quiz_id) AS count FROM category c LEFT JOIN quiz_category qc ON (c.id = qc.category_id ) GROUP BY c.id")
	List<CategoryCount> groupByAptitudeCount();
	
	@Query(nativeQuery = true, value = "SELECT c.id, c.name, count(qc.quiz_id) AS count FROM category c LEFT JOIN quiz_category qc ON (c.id = qc.category_id ) GROUP BY c.id")
	List<CategoryCount> groupByExamCount();
	
	@Query(nativeQuery = true, value = "SELECT c.id, c.name, count(cc.course_id) AS count FROM category c LEFT JOIN course_category cc ON (c.id = cc.category_id ) GROUP BY c.id")
	List<CategoryCount> groupByCourseCount();
	
	@Query(nativeQuery = true, value = "SELECT c.id, c.name, count(cc.counselling_id) AS count FROM category c LEFT JOIN counselling_category cc ON (c.id = cc.category_id ) GROUP BY c.id")
	List<CategoryCount> groupByCounsellingCount();
	
	@Query(nativeQuery = true, value = "SELECT c.id, c.name, count(jc.job_id) AS count FROM category c LEFT JOIN job_category jc ON (c.id = jc.category_id ) GROUP BY c.id")
	List<CategoryCount> groupByJobCount();
	
	@Query(nativeQuery = true, value = "SELECT c.id, c.name, count(ssc.skill_set_id) AS count FROM category c LEFT JOIN skill_set_category ssc ON (c.id = ssc.category_id ) GROUP BY c.id")
	List<CategoryCount> groupBySkillCount();
	
}
