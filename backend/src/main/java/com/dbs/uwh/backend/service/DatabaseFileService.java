package com.dbs.uwh.backend.service;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.dbs.uwh.backend.dao.DatabaseFileDao;
import com.dbs.uwh.backend.model.DatabaseFile;

@Service
public class DatabaseFileService extends GenericService<DatabaseFile, Long> {

	@Autowired
	private DatabaseFileDao filesDao;

	public DatabaseFile uploadFile(MultipartFile file) {

		String fileName = StringUtils.cleanPath(file.getOriginalFilename());

		try {

			DatabaseFile dbFile = new DatabaseFile(fileName, file.getContentType(), file.getBytes());

			return filesDao.save(dbFile);
		} catch (IOException io) {

			io.getStackTrace();
		}
		return null;

	}

}
