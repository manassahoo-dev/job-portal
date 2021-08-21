package com.dbs.uwh.backend.dao;

import org.springframework.stereotype.Repository;

import com.dbs.uwh.backend.model.Category;

@Repository
public interface CategoryDao extends GenericDao<Category, Long> {

}
