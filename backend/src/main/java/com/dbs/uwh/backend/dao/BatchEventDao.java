package com.dbs.uwh.backend.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.dbs.uwh.backend.model.mapping.BatchEvent;

@Repository
public interface BatchEventDao extends GenericDao<BatchEvent, Long> {
	List<BatchEvent> findByBatchId(Long batchId);
}
