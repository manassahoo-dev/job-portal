package com.dbs.uwh.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dbs.uwh.backend.dao.BatchDao;
import com.dbs.uwh.backend.model.Batch;

@Service
public class BatchService {
	@Autowired
	private BatchDao batchDao;

	public List<Batch> findAll() {
		return batchDao.findAll();
	}

	public Batch findById(Long id) {
		return batchDao.findById(id).get();
	}

	public void deleteById(Long id) {
		batchDao.deleteById(id);
	}

	public Batch create(Batch batch) {
		return batchDao.save(batch);
	}

	public Batch update(Batch batch) {
		return batchDao.save(batch);
	}

}
