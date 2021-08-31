package com.dbs.uwh.backend.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.dbs.uwh.backend.model.Document;

@Repository
public interface DocumentDao extends GenericDao<Document, Long> {
	@Query(value = "select * from Document WHERE upload_doc_id = ?1 ", nativeQuery = true)
	Optional<Document> findByUploadDocId(Long stId);
}
