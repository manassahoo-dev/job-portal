package com.dbs.uwh.backend.dao;

import org.springframework.stereotype.Repository;

import com.dbs.uwh.backend.model.Attendance;

@Repository
public interface AttendanceDao extends GenericDao<Attendance, Long> {
	
	
}
