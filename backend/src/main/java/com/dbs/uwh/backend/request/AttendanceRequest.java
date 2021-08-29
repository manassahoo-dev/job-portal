package com.dbs.uwh.backend.request;

import java.time.LocalDate;
import java.util.List;

import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

public class AttendanceRequest {

	@NotNull
	private boolean isPresent;

	@NotNull
	private LocalDate date;

	@NotNull
	private Long batchId;

	@NotNull
	private Long courseId;

	@NotNull
	private List<Long> studentIds;

}
