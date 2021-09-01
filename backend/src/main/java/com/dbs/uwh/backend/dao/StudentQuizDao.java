package com.dbs.uwh.backend.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dbs.uwh.backend.model.mapping.StudentQuiz;

@Repository
public interface StudentQuizDao  extends JpaRepository<StudentQuiz, Long> {
	public List<StudentQuiz> findByBatchIdAndQuizId(Long batchId, Long quizId);
	public List<StudentQuiz> findByStudentId(Long studentId);
}
