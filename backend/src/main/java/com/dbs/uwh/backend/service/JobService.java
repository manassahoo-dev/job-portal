package com.dbs.uwh.backend.service;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dbs.uwh.backend.dao.JobDao;
import com.dbs.uwh.backend.dao.StudentJobDao;
import com.dbs.uwh.backend.model.Enquiry;
import com.dbs.uwh.backend.model.Job;
import com.dbs.uwh.backend.model.StudentJob;
import com.dbs.uwh.backend.model.User;
import com.dbs.uwh.backend.model.constant.Status;
import com.dbs.uwh.backend.request.StudentJobRequest;

@Service
public class JobService extends GenericService<Job, Long> {

	@Autowired
	JobDao jobDao;

	@Autowired
	StudentJobDao studentJobDao;

	public HashMap<String, Integer> JobStats() {

		List<Job> jobs = jobDao.findAll();
		HashMap<String, Integer> jobStats = new HashMap<String, Integer>();

		int completed = 0;
		int inProgress = 0;

		for (Job job: jobs) {
			if (job.getStatus() == Status.COMPLETED) {
				completed++;
			} else if (job.getStatus() == Status.INPROGRESS) {
				inProgress++;
			}
		}

		jobStats.put("total", jobs.size());
		jobStats.put("Completed", completed);
		jobStats.put("InProgress", inProgress);
		return jobStats;
	}

	public List<Job> findByCategoryId(Long categoryId) {
		return jobDao.findByCategories_categoryId(categoryId);
	}

	public void deleteById(Long id) {
		jobDao.deleteJobCategory(id);
		jobDao.deleteById(id);
	}

	@Transactional
	public Job create(Job job) {
		Job entity = jobDao.save(job);
		Long categoryId = job.getCategoryId();
		Long jobId = job.getId();
		boolean isExists = jobDao.existsJobByCategories_categoryIdAndCategories_jobId(categoryId, jobId);
		if (!isExists)
			jobDao.saveJobCategory(categoryId, jobId);
		return entity;
	}

	public void createStudentJobDetail(StudentJobRequest studentJobRequest) {
		for (Long stId : studentJobRequest.getStudentIds()) {

			Optional<StudentJob> studentJob = studentJobDao.getByStudentIdAndJobId(stId, studentJobRequest.getJobId());

			StudentJob stJob = studentJob.orElseGet(StudentJob::new);
			Job job = new Job();
			job.setId(studentJobRequest.getJobId());

			User user = new User();
			user.setId(stId);

			stJob.setJob(job);
			stJob.setStudent(user);
			if (studentJobRequest.getType().equalsIgnoreCase("applied")) {
				stJob.setApplied(true);
				stJob.setAppliedDate(LocalDate.now());
			} else if (studentJobRequest.getType().equalsIgnoreCase("interviewed")) {
				stJob.setApplied(true);
				stJob.setInterviewed(true);
				stJob.setInterviewedDate(LocalDate.now());
			} else if (studentJobRequest.getType().equalsIgnoreCase("placed")) {
				stJob.setApplied(true);
				stJob.setInterviewed(true);
				stJob.setPlaced(true);
				stJob.setPlacedDate(LocalDate.now());
			}
			studentJobDao.save(stJob);
		}
	}

	public List<Long> getJobStudentDetails(Long jobId, String type) {

		if (type.equalsIgnoreCase("applied")) {
			return jobDao.getStudentJobDetailByJobIdAndJobApplied(jobId);
		} else if (type.equalsIgnoreCase("interviewed")) {
			return jobDao.getStudentJobDetailByJobIdAndInterviewed(jobId);
		} else if (type.equalsIgnoreCase("placed"))

		{
			return jobDao.getStudentJobDetailByJobIdAndPlaced(jobId);
		}
		return null;

	}
}
