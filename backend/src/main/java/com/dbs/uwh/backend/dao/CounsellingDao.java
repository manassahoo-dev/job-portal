package com.dbs.uwh.backend.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.dbs.uwh.backend.model.Counselling;
import com.dbs.uwh.backend.model.Course;

@Repository
public interface CounsellingDao extends GenericDao<Counselling, Long> {

	List<Counselling> findByCategories_categoryId(Long categoryId);

}
