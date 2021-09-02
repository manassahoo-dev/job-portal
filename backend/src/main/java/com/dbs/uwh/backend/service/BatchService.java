package com.dbs.uwh.backend.service;

import java.util.HashMap;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dbs.uwh.backend.dao.BatchCounsellingDao;
import com.dbs.uwh.backend.dao.BatchCourseDao;
import com.dbs.uwh.backend.dao.BatchDao;
import com.dbs.uwh.backend.dao.BatchEventDao;
import com.dbs.uwh.backend.dao.BatchQuizDao;
import com.dbs.uwh.backend.dao.BatchSkillSetDao;
import com.dbs.uwh.backend.dao.StudentDao;
import com.dbs.uwh.backend.model.Batch;
import com.dbs.uwh.backend.model.Student;
import com.dbs.uwh.backend.model.constant.QuizType;
import com.dbs.uwh.backend.model.constant.Status;
import com.dbs.uwh.backend.model.mapping.BatchCounselling;
import com.dbs.uwh.backend.model.mapping.BatchCourse;
import com.dbs.uwh.backend.model.mapping.BatchEvent;
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
	@Autowired
	BatchEventDao batchEventDao;
	@Autowired
	private StudentDao studentDao;

	public void updateBatch(Batch batch) {
		Batch dbBatch = batchDao.findById(batch.getId()).get();
		dbBatch.setName(batch.getName());
		dbBatch.setStartDate(batch.getStartDate());
		dbBatch.setEndDate(batch.getEndDate());
		dbBatch.setStatus(batch.getStatus());

		batchDao.save(dbBatch);
	}

	public HashMap<String, Integer> BatchStats() {
		HashMap<String, Integer> batchStats = new HashMap<String, Integer>();

		int completed = 0;
		int inProgress = 0;

		List<Batch> batches = batchDao.findAll();

		for (Batch batch : batches) {
			if (batch.getStatus() == Status.COMPLETED) {
				completed++;
			} else if (batch.getStatus() == Status.INPROGRESS) {
				inProgress++;
			}

		}

		batchStats.put("total", batches.size());
		batchStats.put("Completed", completed);
		batchStats.put("InProgress", inProgress);

		return batchStats;

	}

	public void insertMapping(BatchRequest request) {

		Set<Long> courseIds = request.getCourseIds();
		Set<Long> volunteeringIds = request.getVolunteeringIds();
		Set<Long> quizIds = request.getQuizIds();
		Set<Long> counsellingIds = request.getCounsellingIds();
		Set<Long> skillTestIds = request.getSkillTestIds();
		Set<Long> studentIds = request.getStudentIds();

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

		if (studentIds != null) {
			for (Long studentId : studentIds) {
				batchDao.saveBatchStudent(batchId, studentId);
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

	public void deleteBatchStudent(Student student) {
		batchDao.deleteBatchStudent(student.getId());
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

	public List<Student> findAllStudentsByBatchId(Long id) {
		return studentDao.findByBatchId(id);
	}

	public List<BatchEvent> findAllEventsByBatchId(Long id) {
		return batchEventDao.findByBatchId(id);
	}

	public BatchEvent saveBatchEvent(BatchEvent batchEvent) {
		return batchEventDao.save(batchEvent);
	}

	public void deleteBatchEvent(BatchEvent batchEvent) {
		batchEventDao.delete(batchEvent);
	}
}
