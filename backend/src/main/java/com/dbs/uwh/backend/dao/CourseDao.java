package com.dbs.uwh.backend.dao;

import org.springframework.stereotype.Repository;

import com.dbs.uwh.backend.model.Course;

@Repository
public interface CourseDao extends GenericDao<Course, Long> {

}
