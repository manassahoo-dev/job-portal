package com.dbs.uwh.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dbs.uwh.backend.model.Counselling;

import io.swagger.annotations.Api;

@RestController
@RequestMapping("/Counselling")
@Api(tags = "Counselling", value = "Counselling", description = "Counselling API")
public class CounsellingController extends GenericRestController<Counselling, Long> {
}
