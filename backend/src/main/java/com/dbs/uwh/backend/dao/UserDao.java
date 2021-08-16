package com.dbs.uwh.backend.dao;

import org.springframework.stereotype.Repository;

import com.dbs.uwh.backend.model.User;

@Repository
public interface UserDao extends GenericDao<User, Long> {
}
