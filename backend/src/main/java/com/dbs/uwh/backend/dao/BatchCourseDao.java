package com.dbs.uwh.backend.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dbs.uwh.backend.model.mapping.BatchCourse;

public interface BatchCourseDao  extends JpaRepository<BatchCourse, Long> {
	List<BatchCourse> findByBatchId(Long batchId);

}