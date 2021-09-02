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
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.dbs.uwh.backend.model.Student;
import com.dbs.uwh.backend.model.StudentJob;
import com.dbs.uwh.backend.model.mapping.StudentQuiz;
import com.dbs.uwh.backend.service.StudentService;

import io.swagger.annotations.Api;

@RestController
@RequestMapping("/students")
@Api(tags = "Students", value = "students", description = "Students API")
public class StudentController extends GenericRestController<Student, Long> {
	@Autowired
	private StudentService studentService;

	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Student create(@RequestBody @Valid Student student) {
		studentService.createStudent(student);
		return student;
	}
	
	@GetMapping
	public List<Student> findAll() {
		return studentService.findAll();
	}
	
	@GetMapping("/quiz/{batchId}/{quizId}")
	public List<StudentQuiz> findByBatchIdAndQuizId(@PathVariable("batchId") Long batchId, @PathVariable("quizId") Long quizId) {
		return studentService.findByBatchIdAndQuizId(batchId, quizId);
	}
	
	@GetMapping("/quiz/{batchId}")
	public List<StudentQuiz> findByBatchId(@PathVariable("batchId") Long batchId) {
		return studentService.findByBatchId(batchId);
	}
	
	@PostMapping("quiz")
	public void saveStudentQuiz(@RequestBody @Valid StudentQuiz studentQuiz) {
		studentService.saveStudentQuiz(studentQuiz);
	}
	
	@GetMapping("/{studentId}/jobs")
	public List<StudentJob> findJobByStudentId(@PathVariable("studentId") Long studentId) {
		return studentService.findJobByStudentId(studentId);
	}
	
	@GetMapping("/{studentId}/quizes")
	public List<StudentQuiz> findQuizByStudentId(@PathVariable("studentId") Long studentId) {
		return studentService.findQuizByStudentId(studentId);
	}
}
