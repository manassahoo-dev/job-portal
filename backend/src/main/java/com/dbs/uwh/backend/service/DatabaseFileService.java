package com.dbs.uwh.backend.service;

import java.io.IOException;
import java.util.Optional;

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

	public Document uploadFile(MultipartFile file) throws IOException {
		String fileName = StringUtils.cleanPath(file.getOriginalFilename());
		Document profilePicture = Document.builder().documentType(file.getContentType()).documentName(fileName)
				.data(file.getBytes()).build();
		return documentDao.save(profilePicture);
	}

	public byte[] getProfilePicUploaded(Long stId) {

		Optional<Document> doc = documentDao.findByUploadDocId(stId);
		if (doc.isPresent()) {
			return doc.get().getData();
		}

		return null;

	}

}
