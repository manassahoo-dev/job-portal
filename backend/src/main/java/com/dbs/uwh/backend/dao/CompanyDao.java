package com.dbs.uwh.backend.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dbs.uwh.backend.model.Company;

@Repository
public interface CompanyDao extends JpaRepository<Company, Long> {

}
