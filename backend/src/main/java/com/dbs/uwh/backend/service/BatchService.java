package com.dbs.uwh.backend.service;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dbs.uwh.backend.dao.BatchCounsellingDao;
import com.dbs.uwh.backend.dao.BatchCourseDao;
import com.dbs.uwh.backend.dao.BatchDao;
import com.dbs.uwh.backend.dao.BatchQuizDao;
import com.dbs.uwh.backend.dao.BatchSkillSetDao;
import com.dbs.uwh.backend.model.Batch;
import com.dbs.uwh.backend.model.constant.QuizType;
import com.dbs.uwh.backend.model.mapping.BatchCounselling;
import com.dbs.uwh.backend.model.mapping.BatchCourse;
import com.dbs.uwh.backend.model.mapping.BatchQuiz;
import com.dbs.uwh.backend.model.mapping.BatchSkillSet;
import com.dbs.uwh.backend.request.BatchRequest;

@Service
public class BatchService extends GenericService<Batch, Long> {

	@Autowired
	BatchDao batchDao;

	@Autowired
	BatchCourseDao batchCourseDao;
	@Autowired
	BatchQuizDao batchQuizDao;
	@Autowired
	BatchSkillSetDao batchSkillSetDao;
	@Autowired
	BatchCounsellingDao batchCounsellingDao;

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
		Set<Long> quizIds = request.getQuizIds();
		Set<Long> counsellingIds = request.getCounsellingIds();
		Set<Long> skillTestIds = request.getSkillTestIds();

		Long batchId = request.getBatchId();

		if (courseIds != null) {
			for (Long courseId : courseIds) {
				boolean isExists = batchDao.existsBatchByCoursesBatchIdAndCoursesCourseId(batchId, courseId);
				if (!isExists)
					batchDao.saveBatchCourse(batchId, courseId);
			}
		}

		if (volunteeringIds != null) {
			for (Long volunteeringId : volunteeringIds) {
				boolean isExists = batchDao.existsBatchByVolunteeringsBatchIdAndVolunteeringsVolunteeringId(batchId,
						volunteeringId);
				if (!isExists)
					batchDao.saveBatchVolunteering(batchId, volunteeringId);
			}
		}

		if (quizIds != null) {
			for (Long quizId : quizIds) {
				boolean isExists = batchDao.existsBatchByQuizesBatchIdAndQuizesQuizId(batchId, quizId);
				if (!isExists)
					batchDao.saveBatchQuiz(batchId, quizId);
			}
		}

		if (counsellingIds != null) {
			for (Long counsellingId : counsellingIds) {
				boolean isExists = batchDao.existsBatchByCounsellingsBatchIdAndCounsellingsCounsellingId(batchId,
						counsellingId);
				if (!isExists)
					batchDao.saveBatchCounselling(batchId, counsellingId);
			}
		}

		if (skillTestIds != null) {
			for (Long skillTestId : skillTestIds) {
				boolean isExists = batchDao.existsBatchBySkillSetsBatchIdAndSkillSetsSkillSetId(batchId, skillTestId);
				if (!isExists)
					batchDao.saveBatchSkillSet(batchId, skillTestId);
			}
		}
	}

	public void deleteBatchCourse(BatchCourse batchCourse) {
		batchCourseDao.delete(batchCourse);
	}

	public void deleteBatchQuiz(BatchQuiz batchQuiz) {
		batchQuizDao.delete(batchQuiz);
	}

	public void deleteBatchSkillSet(BatchSkillSet batchSkillSet) {
		batchSkillSetDao.delete(batchSkillSet);
	}

	public void deleteBatchCounselling(BatchCounselling batchCounselling) {
		batchCounsellingDao.delete(batchCounselling);
	}

	public List<BatchCourse> findCoursesByBatchId(Long batchId) {
		return batchCourseDao.findByBatchId(batchId);
	}

	public List<BatchQuiz> findByQuizQuizTypeAndBatchId(Long id, QuizType quizType) {
		return batchQuizDao.findByQuizQuizTypeAndBatchId(quizType, id);
	}

	public List<BatchSkillSet> findAllSkillSetByBatchId(Long id) {
		return batchSkillSetDao.findByBatchId(id);
	}

	public List<BatchCounselling> findAllCounsellingByBatchId(Long id) {
		return batchCounsellingDao.findByBatchId(id);
	}
}
