package com.dbs.uwh.backend.response;

import java.time.LocalDate;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AttendanceResponse {

	private LocalDate date;

	private String presentCount;

	private String absentCount;

}
