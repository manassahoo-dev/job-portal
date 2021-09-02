package com.dbs.uwh.backend.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dbs.uwh.backend.dao.EnquiryDao;
import com.dbs.uwh.backend.model.Enquiry;
import com.dbs.uwh.backend.model.constant.Status;

@Service
public class EnquiryService extends GenericService<Enquiry, Long> {

	@Autowired
	EnquiryDao enquiryDao;

	public HashMap<String, Integer> enquiryStats() {

		List<Enquiry> enquiries = enquiryDao.findAll();
		HashMap<String, Integer> enquiryStats = new HashMap<String, Integer>();

		int completed = 0;
		int inProgress = 0;

		for (Enquiry enquiry : enquiries) {
			if (enquiry.getStatus() == Status.COMPLETED) {
				completed++;
			} else if (enquiry.getStatus() == Status.INPROGRESS) {
				inProgress++;
			}
		}

		enquiryStats.put("total", enquiries.size());
		enquiryStats.put("completed", completed);
		enquiryStats.put("inProgress", inProgress);
		return enquiryStats;
	}
}
