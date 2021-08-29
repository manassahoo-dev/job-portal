
package com.dbs.uwh.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.dbs.uwh.backend.model.DatabaseFile;
import com.dbs.uwh.backend.service.DatabaseFileService;

import io.swagger.annotations.Api;

@RestController

@RequestMapping("/fileupload")

@Api(tags = "fileupload", value = "fileupload", description = "Students profile pic upload API")
public class FileUploadController extends GenericRestController<DatabaseFile, Long> {

	@Autowired
	DatabaseFileService fileService;

	@PostMapping("/profilepic")
	public DatabaseFile fileUpload(@RequestParam("file") MultipartFile file) {

		DatabaseFile fileName = fileService.uploadFile(file);

		String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath().path("/upload/")
				.path(file.getName()).toUriString();

		return fileName;

	}

}
