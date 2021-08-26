package com.dbs.uwh.backend.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.dbs.uwh.backend.model.Batch;
import com.dbs.uwh.backend.model.BatchCourse;
import com.dbs.uwh.backend.model.BatchQuiz;
import com.dbs.uwh.backend.model.constant.QuizType;
import com.dbs.uwh.backend.request.BatchRequest;
import com.dbs.uwh.backend.service.BatchService;

import io.swagger.annotations.Api;

@RestController
@RequestMapping("/batches")
@Api(tags = "Batches", value = "batches", description = "Batches API")
public class BatchController extends GenericRestController<Batch, Long> {

	@Autowired
	private BatchService batchService;

	@PostMapping("/mapping")
	@ResponseStatus(HttpStatus.CREATED)
	public void insertMapping(@RequestBody @Valid BatchRequest request) {
		batchService.insertMapping(request);
	}
	
	@GetMapping("/{id}/courses")
	public List<BatchCourse> findCourses(@PathVariable("id") Long id) {
		return batchService.findCoursesByBatchId(id);
	}
	
	@GetMapping("/{id}/quizes")
	public List<BatchQuiz> findQuizes(@PathVariable("id") Long id, @RequestParam(required = false) String quizType) {
		return batchService.findByQuizQuizTypeAndBatchId(id, QuizType.valueOf(quizType));
	}
}
