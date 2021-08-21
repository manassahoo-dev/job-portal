package com.dbs.uwh.backend.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.dbs.uwh.backend.model.Batch;
import com.dbs.uwh.backend.request.BatchRequest;
import com.dbs.uwh.backend.service.BatchService;

import io.swagger.annotations.Api;

@RestController
@RequestMapping("/batches")
@Api(tags = "Batches", value = "batches", description = "Batches API")
public class BatchController extends GenericRestController<Batch, Long> {

	@Autowired
	private BatchService batchService;

	/*
	 * @GetMapping(value = "/category/{id}") public List<Quiz>
	 * findByCategoryId(@PathVariable("id") Long id, @RequestParam(required = false)
	 * String quizType) { if(quizType != null) { return
	 * batchService.findByQuizTypeAndCategoryId(QuizType.valueOf(quizType), id); }
	 * return batchService.findByCategoryId(id); }
	 */

//	@PostMapping
//	@ResponseStatus(HttpStatus.CREATED)
//	public Batch create(@RequestBody @Valid Batch batch) {
//		return batchService.insertBatchCourse(batch);
//	}

	/*
	 * @PostMapping("/courses")
	 * 
	 * @ResponseStatus(HttpStatus.CREATED) public Batch create(@RequestBody @Valid
	 * Batch batch) { return batchService.insertBatchCourse(batch); }
	 */

	@DeleteMapping(value = "/{id}")
	@ResponseStatus(HttpStatus.OK)
	public void delete(@PathVariable("id") Long id) {
		batchService.deleteById(id);
	}

	@PostMapping("/mapping")
	@ResponseStatus(HttpStatus.CREATED)
	public void insertMapping(@RequestBody @Valid BatchRequest request) {
		batchService.insertMapping(request);
	}
}
