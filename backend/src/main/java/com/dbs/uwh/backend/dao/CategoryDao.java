package com.dbs.uwh.backend.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.dbs.uwh.backend.model.Category;
import com.dbs.uwh.backend.model.CategoryCount;

@Repository
public interface CategoryDao extends GenericDao<Category, Long> {
	
	@Query(nativeQuery = true, value = "SELECT c.id, c.name,count(b.quiz_id) AS COUNT \n"
			+ "FROM category c LEFT OUTER JOIN (SELECT qc.category_id, qc.quiz_id, q.quiz_type, q.name\n"
			+ "FROM quiz_category qc INNER JOIN quiz q ON  qc.quiz_id = q.id \n"
			+ "WHERE q.quiz_type = 'APTITUDE' ) AS b ON c.id = b.category_id GROUP BY c.id, c.name,b.quiz_type")
	List<CategoryCount> groupByAptitudeCount();
	
	@Query(nativeQuery = true, value = "SELECT c.id, c.name,count(b.quiz_id) AS COUNT \n"
			+ "FROM category c LEFT OUTER JOIN (SELECT qc.category_id, qc.quiz_id, q.quiz_type, q.name\n"
			+ "FROM quiz_category qc INNER JOIN quiz q ON  qc.quiz_id = q.id \n"
			+ "WHERE q.quiz_type = 'EXAM' ) AS b ON c.id = b.category_id GROUP BY c.id, c.name,b.quiz_type")
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
