package com.dbs.uwh.backend.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.dbs.uwh.backend.model.Quiz;
import com.dbs.uwh.backend.model.constant.QuizType;

@Repository
public interface QuizDao extends GenericDao<Quiz, Long> {
	List<Quiz> findByQuizTypeAndCategories_categoryId(QuizType quizType, Long categoryId);
	List<Quiz> findByCategories_categoryId(Long categoryId);
	List<Quiz> findByQuizType(QuizType quizType);
	
	boolean existsQuizByCategories_categoryIdAndCategories_quizId(Long categoryId, Long quizId);

	
	@Modifying
	@Transactional
	@Query(value="DELETE FROM quiz_category WHERE quiz_id = ?1", nativeQuery=true)
	public void deleteQuizCategory(Long quizId);
	
	@Modifying
	@Transactional
	@Query(value="INSERT INTO quiz_category (category_id, quiz_id) VALUES (?1, ?2)", nativeQuery=true)
	public void saveQuizCategory(Long categoryId, Long quizId);
}
