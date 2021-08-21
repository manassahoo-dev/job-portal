package com.dbs.uwh.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dbs.uwh.backend.dao.CounsellingDao;
import com.dbs.uwh.backend.model.Counselling;

@Service
public class CounsellingService extends GenericService<Counselling, Long> {
	
	@Autowired
	CounsellingDao counsellingDao;
	
	public List<Counselling> findByCategoryId(Long categoryId) {
		return counsellingDao.findByCategories_categoryId(categoryId);
	}
}
