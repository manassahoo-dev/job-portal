package com.dbs.uwh.backend.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.dbs.uwh.backend.model.Quiz;
import com.dbs.uwh.backend.model.constant.QuizType;
import com.dbs.uwh.backend.service.QuizService;

import io.swagger.annotations.Api;

@RestController
@RequestMapping("/quizes")
@Api(tags = "Quizes", value = "quizes", description = "Quizes API")
public class QuizController extends GenericRestController<Quiz, Long> {
	@Autowired
	private QuizService quizService;

	@GetMapping("/type/{quizType}")
	public List<Quiz> findAllQuiz(@PathVariable("quizType") String quizType) {
		return quizService.findByQuizType(QuizType.valueOf(quizType));
	}
	
	@GetMapping(value = "/category/{id}")
	public List<Quiz> findByCategoryId(@PathVariable("id") Long id,@RequestParam(required = false) String quizType ) {
		if(quizType != null) {
			return quizService.findByQuizTypeAndCategoryId(QuizType.valueOf(quizType), id);
		}
		return quizService.findByCategoryId(id);
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Quiz create(@RequestBody @Valid Quiz quiz) {
		return quizService.create(quiz);
	}
	
	@DeleteMapping(value = "/{id}")
	@ResponseStatus(HttpStatus.OK)
	public void delete(@PathVariable("id") Long id) {
		quizService.deleteById(id);
	}
}
