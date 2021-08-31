package com.dbs.uwh.backend.service;

import java.io.IOException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.dbs.uwh.backend.dao.DocumentDao;
import com.dbs.uwh.backend.dao.StudentDao;
import com.dbs.uwh.backend.model.Document;
import com.dbs.uwh.backend.model.Student;

@Service
public class DatabaseFileService extends GenericService<Document, Long> {

	@Autowired
	private DocumentDao documentDao;

	@Autowired
	private StudentDao studentDao;

	public Document uploadFile(MultipartFile file, Long stId) {

		String fileName = StringUtils.cleanPath(file.getOriginalFilename());

		Document profilePic = null;
		try {
			Optional<Student> student = studentDao.findById(stId);

			if (student.isPresent()) {

				profilePic = Document.builder().documentType(file.getContentType()).documentName(fileName)
						.data(file.getBytes()).uploadDoc_id(stId).build();

				return documentDao.save(profilePic);
			}

		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
		return profilePic;

	}

	public byte[] getProfilePicUploaded(Long stId) {

		Optional<Document> doc = documentDao.findByUploadDocId(stId);
		if (doc.isPresent()) {
			return doc.get().getData();
		}

		return null;

	}

}
