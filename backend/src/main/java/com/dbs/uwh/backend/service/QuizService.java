package com.dbs.uwh.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dbs.uwh.backend.dao.QuizDao;
import com.dbs.uwh.backend.model.Quiz;

@Service
public class QuizService extends GenericService<Quiz, Long> {
	
	@Autowired
	private QuizDao quizDao;
	
	public List<Quiz> findByCategoryId(Long categoryId){
		return quizDao.findByCategories_categoryId(categoryId);
	}
}
