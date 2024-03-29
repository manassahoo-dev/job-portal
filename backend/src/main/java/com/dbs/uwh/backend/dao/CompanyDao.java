package com.dbs.uwh.backend.dao;

import org.springframework.stereotype.Repository;

import com.dbs.uwh.backend.model.Company;

@Repository
public interface CompanyDao extends GenericDao<Company, Long> {

}
