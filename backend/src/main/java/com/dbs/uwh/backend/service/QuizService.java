package com.dbs.uwh.backend.service;

import java.util.List;
import java.util.Set;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dbs.uwh.backend.dao.QuizDao;
import com.dbs.uwh.backend.dao.QuizQuestionDao;
import com.dbs.uwh.backend.model.Quiz;
import com.dbs.uwh.backend.model.QuizAnswer;
import com.dbs.uwh.backend.model.QuizQuestion;
import com.dbs.uwh.backend.model.constant.QuizType;

@Service
public class QuizService extends GenericService<Quiz, Long> {

	@Autowired
	private QuizDao quizDao;
	
	@Autowired
	private QuizQuestionDao quizQuestionDao;

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
		Set<QuizQuestion> questions = quiz.getQuestions();
		for(QuizQuestion question: questions) {
			QuizQuestion updatedQuestion = quizQuestionDao.save(question);
			Set<QuizAnswer> answers1 = question.getAnswers();
			for(QuizAnswer answer: answers1) {
				System.out.println(answer);
			}
			
			Set<QuizAnswer> answers2 = updatedQuestion.getAnswers();
			for(QuizAnswer answer: answers2) {
				System.out.println(answer);
			}
		}
		Quiz entity = quizDao.save(quiz);
		
		Long categoryId = quiz.getCategoryId();
		Long quizId = quiz.getId();
		boolean isExists = quizDao.existsQuizByCategories_categoryIdAndCategories_quizId(categoryId, quizId);
		if (!isExists)
			quizDao.saveQuizCategory(categoryId, quizId);
		return entity;
	}

}
