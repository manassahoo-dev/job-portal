package com.dbs.uwh.backend.model;

import java.util.HashMap;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class DashboardResponse {

	private HashMap<String, Integer> studentStats = new HashMap<String, Integer>();

	private HashMap<String, Integer> batchStats = new HashMap<String, Integer>();

	private HashMap<String, Integer> courseStats = new HashMap<String, Integer>();
	
	private HashMap<String, Integer> aptitudeStats = new HashMap<String, Integer>();
	
	private HashMap<String, Integer> jobStats = new HashMap<String, Integer>();
	
	
}
