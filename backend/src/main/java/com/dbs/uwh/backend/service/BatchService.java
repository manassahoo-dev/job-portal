package com.dbs.uwh.backend.service;

import java.util.Date;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dbs.uwh.backend.dao.BatchDao;
import com.dbs.uwh.backend.model.Batch;

@Service
public class BatchService extends GenericService<Batch, Long> {

	@Autowired
	BatchDao batchDao;

	public HashMap<String, Integer> BatchStats() {
		HashMap<String, Integer> batchStats = new HashMap<String, Integer>();

		Date date = new Date();

		int completed = 0;
		int inProgress = 0;

		List<Batch> batches = batchDao.findAll();

		for (Batch b : batches) {

			if (b.getEndDate().before(date)) {
				completed++;
			} else {
				inProgress++;
			}

		}

		batchStats.put("totalBatches", batches.size());
		batchStats.put("batchesCompleted", completed);
		batchStats.put("batchesInProgress", inProgress);

		return batchStats;

	}

}
