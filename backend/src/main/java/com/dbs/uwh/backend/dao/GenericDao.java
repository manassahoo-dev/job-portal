package com.dbs.uwh.backend.dao;

import java.io.Serializable;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

import com.dbs.uwh.backend.model.BaseEntity;

@NoRepositoryBean
public interface GenericDao<T extends BaseEntity, ID extends Serializable> extends JpaRepository<T, ID> {
}