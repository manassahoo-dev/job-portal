package com.dbs.uwh.backend.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dbs.uwh.backend.model.mapping.BatchCounselling;

public interface BatchCounsellingDao extends JpaRepository<BatchCounselling, Long> {
	List<BatchCounselling> findByBatchId(Long batchId);

}
