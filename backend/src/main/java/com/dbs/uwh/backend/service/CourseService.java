package com.dbs.uwh.backend.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dbs.uwh.backend.dao.CourseDao;
import com.dbs.uwh.backend.model.Course;

@Service
public class CourseService extends GenericService<Course, Long> {

	@Autowired
	CourseDao courseDao;

	public HashMap<String, Integer> CourseStats() {

		List<Course> courses = courseDao.findAll();

		HashMap<String, Integer> courseStats = new HashMap<String, Integer>();

		courseStats.put("totalCourses", courses.size());
		courseStats.put("active", 5);
		courseStats.put("reserve", 5);
		return courseStats;

	}

	public List<Course> findByCategoryId(Long categoryId) {
		return courseDao.findByCategories_categoryId(categoryId);
	}
}
