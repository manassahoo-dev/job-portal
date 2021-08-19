package com.dbs.uwh.backend.dao;

import java.util.List;

import com.dbs.uwh.backend.model.Quiz;

public interface QuizDao extends GenericDao<Quiz, Long> {
	List<Quiz> findByCategories_categoryId(Long categoryId);
}
