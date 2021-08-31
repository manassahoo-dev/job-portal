package com.dbs.uwh.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dbs.uwh.backend.dao.StudentJobDao;
import com.dbs.uwh.backend.model.StudentJob;

@Service
public class StudentJobService extends GenericService<StudentJob, Long> {

	@Autowired
	StudentJobDao studentJobDao;

	
}
