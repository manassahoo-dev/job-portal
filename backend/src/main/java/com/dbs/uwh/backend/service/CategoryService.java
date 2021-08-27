package com.dbs.uwh.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dbs.uwh.backend.dao.CategoryDao;
import com.dbs.uwh.backend.model.Category;
import com.dbs.uwh.backend.model.CategoryCount;

@Service
public class CategoryService extends GenericService<Category, Long> {

	@Autowired
	private CategoryDao categoryDao;

	public List<CategoryCount> groupByAptitudeCount() {
		return categoryDao.groupByAptitudeCount();
	}

	public List<CategoryCount> groupByExamCount() {
		return categoryDao.groupByExamCount();
	}

	public List<CategoryCount> groupByCourseCount() {
		return categoryDao.groupByCourseCount();
	}

	public List<CategoryCount> groupByCounsellingCount() {
		return categoryDao.groupByCounsellingCount();
	}
	
	public List<CategoryCount> groupByJobCount() {
		return categoryDao.groupByJobCount();
	}
	
	public List<CategoryCount> groupBySkillCount() {
		return categoryDao.groupBySkillCount();
	}

}
