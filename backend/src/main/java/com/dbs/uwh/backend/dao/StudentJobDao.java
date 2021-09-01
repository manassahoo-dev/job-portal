package com.dbs.uwh.backend.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.dbs.uwh.backend.model.StudentJob;

@Repository
public interface StudentJobDao extends GenericDao<StudentJob, Long> {
	public List<StudentJob> findByStudentId(Long studentId);
}
