package com.dbs.uwh.backend.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dbs.uwh.backend.model.Batch;

@Repository
public interface BatchDao extends JpaRepository<Batch, Long> {

}
