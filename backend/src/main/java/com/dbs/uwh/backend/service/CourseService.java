package com.dbs.uwh.backend.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dbs.uwh.backend.dao.CourseCategoryDao;
import com.dbs.uwh.backend.dao.CourseDao;
import com.dbs.uwh.backend.model.Category;
import com.dbs.uwh.backend.model.Course;
import com.dbs.uwh.backend.model.CourseCategory;

@Service
public class CourseService extends GenericService<Course, Long> {

	@Autowired
	CourseDao courseDao;

	@Autowired
	CourseCategoryDao courseCategoryDao;

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

	public void deleteById(Long id) {
		courseDao.deleteCourseCategory(id);
		courseDao.deleteById(id);
	}

	@Transactional
	public Course create(Course course) {
		Course entity = courseDao.save(course);

		Long categoryId = course.getCategoryId();
		Long courseId = course.getId();
		boolean isExists = courseDao.existsCourseByCategories_categoryIdAndCategories_courseId(categoryId, courseId);
		if (!isExists)
			courseDao.saveCourseCategory(categoryId, courseId);
		return entity;
	}

	public Map<Category, Course> findAllGroupByCategory() {
		List<CourseCategory> list = courseCategoryDao.findAll();
		Map<Category, Course> map = list.stream().collect(Collectors.toMap(x -> x.getCategory(), x -> x.getCourse()));
		return map;
	}
}
