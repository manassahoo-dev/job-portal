package com.dbs.uwh.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dbs.uwh.backend.dao.UserDao;
import com.dbs.uwh.backend.model.User;

@Service
public class UserService {
	@Autowired
	private UserDao userDao;

	public List<User> findAll() {
		return userDao.findAll();
	}

	public User findById(Long id) {
		return userDao.findById(id).get();
	}

	public void deleteById(Long id) {
		userDao.deleteById(id);
	}

	public User create(User user) {
		return userDao.save(user);
	}

	public User update(User user) {
		return userDao.save(user);
	}
}
