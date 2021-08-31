package com.dbs.uwh.backend.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dbs.uwh.backend.dao.EnquiryDao;
import com.dbs.uwh.backend.model.Enquiry;

@Service
public class EnquiryService extends GenericService<Enquiry, Long> {

	@Autowired
	EnquiryDao enquiryDao;

	public HashMap<String, Integer> enquiryStats() {

		List<Enquiry> enquiries = enquiryDao.findAll();
		HashMap<String, Integer> enquiryStats = new HashMap<String, Integer>();
		int n = 1;
		enquiryStats.put("total", enquiries.size());
		enquiryStats.put("completed", n);
		enquiryStats.put("inProgress", enquiries.size() - n);
		return enquiryStats;
	}
}
