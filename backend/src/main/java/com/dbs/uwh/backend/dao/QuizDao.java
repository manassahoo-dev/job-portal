package com.dbs.uwh.backend.dao;

import java.util.List;

import com.dbs.uwh.backend.model.Quiz;
import com.dbs.uwh.backend.model.QuizType;

public interface QuizDao extends GenericDao<Quiz, Long> {
	List<Quiz> findByQuizTypeAndCategories_categoryId(QuizType quizType, Long categoryId);
	List<Quiz> findByCategories_categoryId(Long categoryId);
}
