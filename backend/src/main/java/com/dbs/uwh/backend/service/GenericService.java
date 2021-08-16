package com.dbs.uwh.backend.service;

import java.io.Serializable;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.stereotype.Service;

import com.dbs.uwh.backend.dao.GenericDao;
import com.dbs.uwh.backend.model.BaseEntity;

@Service
@Transactional
public abstract class GenericService<T extends BaseEntity, ID extends Serializable> {

	@Autowired
	private GenericDao<T, ID> genericDao;

	public List<T> findAll() {
		return genericDao.findAll();
	}

	public T findById(ID id) {
		return genericDao.findById(id).get();
	}

	public void deleteById(ID id) {
		genericDao.deleteById(id);
	}

	public T create(T entity) {
		return genericDao.save(entity);
	}

	public T update(T entity) {
		return genericDao.save(entity);
	}

	public boolean exists(T entity) {
		ExampleMatcher exampleMatcher = ExampleMatcher.matchingAll().withIgnorePaths("createdAt", "updatedAt")
				.withIgnoreCase();
		Example<T> example = Example.of(entity, exampleMatcher);
		return genericDao.exists(example);
	}

}
