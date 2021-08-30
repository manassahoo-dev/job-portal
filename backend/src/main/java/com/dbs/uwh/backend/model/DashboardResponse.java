package com.dbs.uwh.backend.model;

import java.util.HashMap;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class DashboardResponse {

	private HashMap<String, Integer> student = new HashMap<String, Integer>();
	private HashMap<String, Integer> batch = new HashMap<String, Integer>();
	private HashMap<String, Integer> course = new HashMap<String, Integer>();
	private HashMap<String, Integer> aptitude = new HashMap<String, Integer>();
	private HashMap<String, Integer> job = new HashMap<String, Integer>();
	private HashMap<String, Integer> enquiry = new HashMap<String, Integer>();

}
