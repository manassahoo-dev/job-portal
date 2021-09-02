package com.dbs.uwh.backend.service;

import java.time.LocalDate;
import java.time.Period;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.dbs.uwh.backend.dao.StudentDao;
import com.dbs.uwh.backend.dao.StudentJobDao;
import com.dbs.uwh.backend.dao.StudentQuizDao;
import com.dbs.uwh.backend.model.Student;
import com.dbs.uwh.backend.model.StudentJob;
import com.dbs.uwh.backend.model.constant.Gender;
import com.dbs.uwh.backend.model.mapping.StudentQuiz;

@Service
public class StudentService extends GenericService<Student, Long> {

	@Autowired
	StudentDao studentDao;

	@Autowired
	private StudentQuizDao studentQuizDao;
	@Autowired
	private StudentJobDao studentJobDao;

	public List<Student> findAll() {
		List<Student> students = studentDao.findAll();
		for (Student student : students) {
			if (student.getBatch() != null)
				student.setBatchName(student.getBatch().getName());
		}
		return students;
	}

	public HashMap<String, Integer> StudentsStats() {
		Gender gender = null;
		int maleStudents = 0;
		int femaleStudents = 0;

		List<Student> students = studentDao.findAll();
		for (Student st : students) {
			if (!StringUtils.isEmpty(st)) {
				if (gender.M.equals(st.getGender())) {
					maleStudents++;
				} else {
					femaleStudents++;
				}
			}

		}

		HashMap<String, Integer> studentStats = new HashMap<String, Integer>();

		studentStats.put("total", students.size());
		studentStats.put("male", maleStudents);
		studentStats.put("female", femaleStudents);
		return studentStats;

	}

	public Student createStudent(Student student) {

		Student studentData = studentDao.findTopByOrderByIdDesc();
		if (studentData != null) {
			student.setRegistrationNumber(getCurrentAcademicYear() + student.getGender() + "/" + Long.valueOf(studentData.getId()) + Long.valueOf("1"));
			if (student.getDateOfBirth() != null) {
				Period period = Period.between(student.getDateOfBirth(), LocalDate.now());
				student.setAge(period.getYears());
			}
		}
		return studentDao.save(student);

	}

	public String getCurrentAcademicYear() {
		LocalDate currentdate = LocalDate.now();

		int currentYear = currentdate.getYear();
		int nextYear = currentYear + 1;
		System.out.println(String.valueOf(currentYear) + "-" + String.valueOf(nextYear).substring(2));
		return String.valueOf(currentYear) + "-" + String.valueOf(nextYear).substring(2) + "/";

	}

	public List<StudentQuiz> findByBatchIdAndQuizId(Long batchId, Long quizId) {
		return studentQuizDao.findByBatchIdAndQuizId(batchId, quizId);
	}
	
	public List<StudentQuiz> findByBatchId(Long batchId) {
		return studentQuizDao.findByBatchId(batchId);
	}
	

	public void saveStudentQuiz(StudentQuiz studentQuiz) {
		studentQuizDao.save(studentQuiz);
	}

	public List<StudentJob> findJobByStudentId(Long studentId) {
		return studentJobDao.findByStudentId(studentId);
	}

	public List<StudentQuiz> findQuizByStudentId(Long studentId) {
		return studentQuizDao.findByStudentId(studentId);
	}

}
