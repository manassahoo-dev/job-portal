package com.dbs.uwh.backend.service;

import java.util.HashMap;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dbs.uwh.backend.dao.JobDao;
import com.dbs.uwh.backend.model.Job;

@Service
public class JobService extends GenericService<Job, Long> {
	
	@Autowired
	JobDao jobDao;
	
	public HashMap<String, Integer> JobStats() {
		
		List<Job> jobs = jobDao.findAll();
		HashMap<String, Integer> studentStats = new HashMap<String, Integer>();

		studentStats.put("totalJobs", jobs.size());
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
}
