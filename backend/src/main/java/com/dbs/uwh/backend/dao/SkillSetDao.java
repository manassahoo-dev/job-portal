package com.dbs.uwh.backend.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.dbs.uwh.backend.model.SkillSet;

@Repository
public interface SkillSetDao extends GenericDao<SkillSet, Long> {
	List<SkillSet> findByCategories_categoryId(Long categoryId);
	
	boolean existsSkillSetByCategories_categoryIdAndCategories_skillSetId(Long categoryId, Long skillSetId);

	
	@Modifying
	@Transactional
	@Query(value="DELETE FROM skill_set_category WHERE skill_set_id = ?1", nativeQuery=true)
	public void deleteSkillSetCategory(Long skillSetId);
	
	@Modifying
	@Transactional
	@Query(value="INSERT INTO skill_set_category (category_id, skill_set_id) VALUES (?1, ?2)", nativeQuery=true)
	public void saveSkillSetCategory(Long categoryId, Long skillSetId);
}
