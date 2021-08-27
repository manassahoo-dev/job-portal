package com.dbs.uwh.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dbs.uwh.backend.dao.AttendanceDao;
import com.dbs.uwh.backend.dao.BatchDao;
import com.dbs.uwh.backend.dao.StudentDao;
import com.dbs.uwh.backend.model.Attendance;
import com.dbs.uwh.backend.model.Batch;
import com.dbs.uwh.backend.model.Student;

@Service
public class AttendanceService extends GenericService<Attendance, Long> {

	@Autowired
	AttendanceDao attendanceDao;

	@Autowired
	StudentDao studentDao;
	
	@Autowired
	BatchDao  batchDao;
	
	public Attendance getAllStudentAttendanceData()
	{
		List<Attendance> allStudentsAttendanceData=attendanceDao.findAll();
		
		for(Attendance studentAttendanceData:allStudentsAttendanceData)
		{
			
			Long studentId=studentAttendanceData.getStudentId();
			
			Long batchId=studentAttendanceData.getBatchId();
			
			Optional<Student>  student=studentDao.findById(studentId);
			
			if(student.isPresent())
			{
				System.out.println("Student Data:: "+ student);
				return studentAttendanceData;
			}
			
			
			Optional<Batch>  batch=batchDao.findById(batchId);
			
			if(student.isPresent())
			{
				System.out.println("Batch Data:: "+ batch);
			 return	studentAttendanceData;
			}
			
		
			
		}
		return null;
		
		
		
		
		
	}
}
