package com.dbs.uwh.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dbs.uwh.backend.dao.CompanyDao;
import com.dbs.uwh.backend.model.Company;

@Service
public class CompanyService {
	@Autowired
	private CompanyDao companyDao;

	public List<Company> findAll() {
		return companyDao.findAll();
	}

	public Company findById(Long id) {
		return companyDao.findById(id).get();
	}

	public void deleteById(Long id) {
		companyDao.deleteById(id);
	}

	public Company create(Company company) {
		return companyDao.save(company);
	}

	public Company update(Company company) {
		return companyDao.save(company);
	}
}
