package com.dbs.uwh.backend.service;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dbs.uwh.backend.dao.BatchDao;
import com.dbs.uwh.backend.model.Batch;
import com.dbs.uwh.backend.request.BatchRequest;

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

	public void insertMapping(BatchRequest request) {

		Set<Long> courseIds = request.getCourseIds();
		Set<Long> volunteeringIds = request.getVolunteeringIds();

		if (!courseIds.isEmpty()) {
			for (Long courseId : courseIds) {
				boolean isExists = batchDao.existsBatchByCourses_courseIdAndCourses_batchId(request.getBatchId(),
						courseId);
				if (!isExists)
					batchDao.saveBatchCourse(request.getBatchId(), courseId);
			}
		}

		if (!volunteeringIds.isEmpty()) {
			for (Long vId : volunteeringIds) {
				boolean isExists = batchDao.existsBatchByVolunteerings_volunteeringIdAndVolunteerings_batchId(request.getBatchId(),
						vId);
				if (!isExists)
					batchDao.saveBatchVolunteering(request.getBatchId(), vId);
			}
		}
	}

}
