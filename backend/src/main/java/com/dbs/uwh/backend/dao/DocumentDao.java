package com.dbs.uwh.backend.dao;

import org.springframework.stereotype.Repository;

import com.dbs.uwh.backend.model.Document;

@Repository
public interface DocumentDao extends GenericDao<Document, Long> {
	
	
}
