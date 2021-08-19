package com.dbs.uwh.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dbs.uwh.backend.model.Quiz;
import com.dbs.uwh.backend.service.QuizService;

import io.swagger.annotations.Api;

@RestController
@RequestMapping("/quizes")
@Api(tags = "Quizes", value = "quizes", description = "Quizes API")
public class QuizController extends GenericRestController<Quiz, Long> {
	@Autowired
	private QuizService quizService;

	@GetMapping(value = "/category/{id}")
	public List<Quiz> findByCategoryId(@PathVariable("id") Long id) {
		return quizService.findByCategoryId(id);
	}
}
