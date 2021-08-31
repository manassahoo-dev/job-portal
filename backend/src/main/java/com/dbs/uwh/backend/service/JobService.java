package com.dbs.uwh.backend.service;

import java.util.HashMap;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dbs.uwh.backend.dao.JobDao;
import com.dbs.uwh.backend.model.Job;
import com.dbs.uwh.backend.request.StudentJobRequest;

@Service
public class JobService extends GenericService<Job, Long> {

	@Autowired
	JobDao jobDao;

	public HashMap<String, Integer> JobStats() {

		List<Job> jobs = jobDao.findAll();
		HashMap<String, Integer> studentStats = new HashMap<String, Integer>();

		studentStats.put("total", jobs.size());
		studentStats.put("placements", 15);
		studentStats.put("interviews", 1);
		return studentStats;
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
		for (Long StId : studentJobRequest.getStudentIds()) {
			if (studentJobRequest.getType().equalsIgnoreCase("applied")) {
				jobDao.saveStudentJobApplied(studentJobRequest.getJobId(), StId);
			} else if (studentJobRequest.getType().equalsIgnoreCase("interviewed")) {
				jobDao.saveStudentInterviewed(studentJobRequest.getJobId(), StId);
			} else if (studentJobRequest.getType().equalsIgnoreCase("placed")) {
				jobDao.saveStudentJobPlaced(studentJobRequest.getJobId(), StId);
			}
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
