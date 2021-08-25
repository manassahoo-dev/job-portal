package com.dbs.uwh.backend.service;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dbs.uwh.backend.dao.BatchCourseDao;
import com.dbs.uwh.backend.dao.BatchDao;
import com.dbs.uwh.backend.dao.BatchQuizDao;
import com.dbs.uwh.backend.model.Batch;
import com.dbs.uwh.backend.model.BatchCourse;
import com.dbs.uwh.backend.model.BatchQuiz;
import com.dbs.uwh.backend.model.constant.QuizType;
import com.dbs.uwh.backend.request.BatchRequest;

@Service
public class BatchService extends GenericService<Batch, Long> {

	@Autowired
	BatchDao batchDao;

	@Autowired
	BatchCourseDao batchCourseDao;

	@Autowired
	BatchQuizDao batchQuizDao;

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
		Set<Long> counsellingIds = request.getCounsellingIds();

		if (courseIds != null) {
			for (Long courseId : courseIds) {
				boolean isExists = batchDao.existsBatchByCourses_courseIdAndCourses_batchId(request.getBatchId(),
						courseId);
				if (!isExists)
					batchDao.saveBatchCourse(request.getBatchId(), courseId);
			}
		}

		if (volunteeringIds != null) {
			for (Long vId : volunteeringIds) {
				boolean isExists = batchDao
						.existsBatchByVolunteerings_volunteeringIdAndVolunteerings_batchId(request.getBatchId(), vId);
				if (!isExists)
					batchDao.saveBatchVolunteering(request.getBatchId(), vId);
			}
		}
		
		if (!counsellingIds.isEmpty()) {
			for (Long cId : counsellingIds) {
				boolean isExists = batchDao.existsBatchByCounsellings_counsellingIdAndCounsellings_batchId(request.getBatchId(),
						cId);
				if (!isExists)
					batchDao.saveBatchVolunteering(request.getBatchId(), cId);
			}
		}
	}

	public List<BatchCourse> findCoursesByBatchId(Long batchId) {
		return batchCourseDao.findByBatchId(batchId);
	}

	public List<BatchQuiz> findByQuizQuizTypeAndBatchId(Long id, QuizType quizType) {
		return batchQuizDao.findByQuizQuizTypeAndBatchId(quizType, id);
	}
}
