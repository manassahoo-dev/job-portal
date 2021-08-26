package com.dbs.uwh.backend.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dbs.uwh.backend.model.mapping.BatchSkillSet;

public interface BatchSkillSetDao extends JpaRepository<BatchSkillSet, Long> {
	List<BatchSkillSet> findByBatchId(Long batchId);
}
