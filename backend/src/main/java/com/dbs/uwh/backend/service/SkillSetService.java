package com.dbs.uwh.backend.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dbs.uwh.backend.dao.SkillSetDao;
import com.dbs.uwh.backend.model.SkillSet;

@Service
public class SkillSetService extends GenericService<SkillSet, Long> {

	@Autowired
	private SkillSetDao skillSetSetDao;

	public List<SkillSet> findByCategoryId(Long categoryId) {
		return skillSetSetDao.findByCategories_categoryId(categoryId);
	}

	public void deleteById(Long id) {
		skillSetSetDao.deleteSkillSetCategory(id);
		skillSetSetDao.deleteById(id);
	}

	@Transactional
	public SkillSet create(SkillSet skillSet) {
		SkillSet entity = skillSetSetDao.save(skillSet);

		Long categoryId = skillSet.getCategoryId();
		Long skillSetId = skillSet.getId();
		boolean isExists = skillSetSetDao.existsSkillSetByCategories_categoryIdAndCategories_skillSetId(categoryId, skillSetId);
		if (!isExists)
			skillSetSetDao.saveSkillSetCategory(categoryId, skillSetId);
		return entity;
	}

}
