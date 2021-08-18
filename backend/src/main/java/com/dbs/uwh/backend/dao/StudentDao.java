package com.dbs.uwh.backend.dao;

import org.springframework.stereotype.Repository;

import com.dbs.uwh.backend.model.Student;

@Repository
public interface StudentDao extends GenericDao<Student, Long> {
}
