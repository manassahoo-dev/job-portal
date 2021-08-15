package com.dbs.uwh.backend.dao;

import org.springframework.stereotype.Repository;
import com.dbs.uwh.backend.model.Job;

@Repository
public interface JobDao extends GenericDao<Job, Long> {

}
