package com.dbs.uwh.backend.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.dbs.uwh.backend.model.Student;

@Repository
public interface StudentDao extends GenericDao<Student, Long> {
	
	Student findTopByOrderByIdDesc();
	
	List<Student> findByBatchId(Long categoryId);

}
