package com.dbs.uwh.backend.request;

import java.time.LocalDate;
import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class StudentJobRequest {

	private List<Long> studentIds;

	private Long jobId;

	private String type;

}
