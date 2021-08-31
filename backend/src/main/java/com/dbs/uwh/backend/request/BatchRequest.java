package com.dbs.uwh.backend.request;

import java.util.Set;

import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BatchRequest {

	@NotNull
	private Long batchId;
	private Set<Long> courseIds;
	private Set<Long> volunteeringIds;
	private Set<Long> counsellingIds;
	private Set<Long> quizIds;
	private Set<Long> skillTestIds;
	private Set<Long> studentIds;
}
