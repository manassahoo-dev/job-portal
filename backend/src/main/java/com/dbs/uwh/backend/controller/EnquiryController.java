package com.dbs.uwh.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dbs.uwh.backend.model.Enquiry;

import io.swagger.annotations.Api;

@RestController
@RequestMapping("/enquiry")
@Api(tags = "Enquiry", value = "enquiry", description = "Enquiries API")
public class EnquiryController extends GenericRestController<Enquiry, Long> {
}
