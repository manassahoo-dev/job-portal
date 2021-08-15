package com.dbs.uwh.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dbs.uwh.backend.model.Company;

import io.swagger.annotations.Api;

@RestController
@RequestMapping("/companies")
@Api(tags = "Companies", value = "companies", description = "Companies API")
public class CompanyController extends GenericRestController<Company, Long> {
}
