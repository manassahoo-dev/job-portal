
package com.dbs.uwh.backend.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.dbs.uwh.backend.model.Document;
import com.dbs.uwh.backend.service.DatabaseFileService;

import io.swagger.annotations.Api;

@RestController

@RequestMapping("/upload")

@Api(tags = "fileupload", value = "fileupload", description = "Students profile pic upload API and Documents Upload")
public class FileUploadController extends GenericRestController<Document, Long> {

	@Autowired
	DatabaseFileService fileService;

	@PostMapping("/profile-picture")
	public Document fileUpload(@RequestParam("file") MultipartFile file) throws IOException {
		return fileService.uploadFile(file);
	}

	
	@GetMapping("/getprofilepic/{stId}")
	public byte[] getProfilePicUploaded(@PathVariable Long stId) {

		return fileService.getProfilePicUploaded(stId);

	}
	
}
