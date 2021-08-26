package com.dbs.uwh.backend.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dbs.uwh.backend.dao.QuizDao;
import com.dbs.uwh.backend.model.Quiz;
import com.dbs.uwh.backend.model.constant.QuizType;

@Service
public class QuizService extends GenericService<Quiz, Long> {

	@Autowired
	private QuizDao quizDao;
	
	public List<Quiz> findByQuizTypeAndCategoryId(QuizType quizType, Long categoryId) {
		return quizDao.findByQuizTypeAndCategories_categoryId(quizType, categoryId);
	}

	public List<Quiz> findByCategoryId(Long categoryId) {
		return quizDao.findByCategories_categoryId(categoryId);
	}

	public void deleteById(Long id) {
		quizDao.deleteQuizCategory(id);
		quizDao.deleteById(id);
	}

	@Transactional
	public Quiz create(Quiz quiz) {
		Quiz entity = quizDao.save(quiz);
		
		Long categoryId = quiz.getCategoryId();
		Long quizId = quiz.getId();
		boolean isExists = quizDao.existsQuizByCategories_categoryIdAndCategories_quizId(categoryId, quizId);
		if (!isExists)
			quizDao.saveQuizCategory(categoryId, quizId);
		return entity;
	}

	public List<Quiz> findByQuizType(QuizType quizType) {
		return quizDao.findByQuizType(quizType);
	}

}
