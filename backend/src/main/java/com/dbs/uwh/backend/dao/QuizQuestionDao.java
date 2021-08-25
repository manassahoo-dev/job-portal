package com.dbs.uwh.backend.dao;

import org.springframework.stereotype.Repository;

import com.dbs.uwh.backend.model.QuizQuestion;

@Repository
public interface QuizQuestionDao extends GenericDao<QuizQuestion, Long> {
}
