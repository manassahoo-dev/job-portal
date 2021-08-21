package com.dbs.uwh.backend.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.dbs.uwh.backend.model.Counselling;

@Repository
public interface CounsellingDao extends GenericDao<Counselling, Long> {

	List<Counselling> findByCategories_categoryId(Long categoryId);

	public boolean existsCounsellingByCategories_categoryIdAndCategories_counsellingId(Long categoryId, Long counsellingId);

	
	@Modifying
	@Transactional
	@Query(value="DELETE FROM counselling_category WHERE counselling_id = ?1", nativeQuery=true)
	public void deleteCounsellingCategory(Long counsellingId);
	
	@Modifying
	@Transactional
	@Query(value="INSERT INTO counselling_category (category_id, counselling_id) VALUES (?1, ?2)", nativeQuery=true)
	public void saveCounsellingCategory(Long categoryId, Long counsellingId);

}
