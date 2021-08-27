package com.dbs.uwh.backend.response;

import java.time.LocalDate;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AttendanceResponse {

	private String studentName;

	private String batchName;

	private String courseName;

	private LocalDate date;

	private boolean isPresent;

	private String stats;

}
