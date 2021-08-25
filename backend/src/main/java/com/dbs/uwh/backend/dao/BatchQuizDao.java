package com.dbs.uwh.backend.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dbs.uwh.backend.model.BatchQuiz;
import com.dbs.uwh.backend.model.constant.QuizType;

public interface BatchQuizDao  extends JpaRepository<BatchQuiz, Long> {
	List<BatchQuiz> findByQuizQuizTypeAndBatchId(QuizType quizType, Long batchId);

}