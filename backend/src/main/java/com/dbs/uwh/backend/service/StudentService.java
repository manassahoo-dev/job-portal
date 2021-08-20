package com.dbs.uwh.backend.service;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.dbs.uwh.backend.dao.StudentDao;
import com.dbs.uwh.backend.model.Gender;
import com.dbs.uwh.backend.model.Student;

@Service
public class StudentService extends GenericService<Student, Long> {

	@Autowired
	StudentDao studentDao;

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

		studentStats.put("totalStudents", students.size());
		studentStats.put("maleStudents", maleStudents);
		studentStats.put("femaleStudents",femaleStudents );
		return studentStats;

	}

	public Student createStudent(Student student) {
		Student studentData = studentDao.findTopByOrderByIdDesc();
		student.setRegistrationNumber(getCurrentAcademicYear() + student.getGender() + "/" + Long.valueOf(studentData.getId())+Long.valueOf("1"));
		return studentDao.save(student);

	}
	
	public String getCurrentAcademicYear()
	{
		LocalDate currentdate = LocalDate.now();

		int currentYear = currentdate.getYear();
		int nextYear = currentYear + 1;
		System.out.println(String.valueOf(currentYear) + "-" + String.valueOf(nextYear).substring(2));
		return String.valueOf(currentYear) + "-" + String.valueOf(nextYear).substring(2)+"/";
		
	}

}
