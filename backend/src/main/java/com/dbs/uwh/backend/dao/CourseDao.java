package com.dbs.uwh.backend.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.dbs.uwh.backend.model.Course;

@Repository
public interface CourseDao extends GenericDao<Course, Long> {

	List<Course> findByCategories_categoryId(Long categoryId);

}
