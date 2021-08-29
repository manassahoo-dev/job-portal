package com.dbs.uwh.backend.service;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.dbs.uwh.backend.dao.DocumentDao;
import com.dbs.uwh.backend.model.Document;

@Service
public class DatabaseFileService extends GenericService<Document, Long> {

	@Autowired
	private DocumentDao documentDao;

	public Document uploadFile(MultipartFile file) {

		String fileName = StringUtils.cleanPath(file.getOriginalFilename());

		Document profilePic;
		try {
			profilePic = Document.builder().documentType(file.getContentType()).documentName(fileName).data(file.getBytes()).build();
			return documentDao.save(profilePic);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}

		

	}

}
