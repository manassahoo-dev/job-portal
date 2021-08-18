package com.dbs.uwh.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dbs.uwh.backend.model.Aptitude;

import io.swagger.annotations.Api;

@RestController
@RequestMapping("/aptitudes")
@Api(tags = "Aptitudes", value = "aptitudes", description = "Aptitudes API")
public class AptitudeController extends GenericRestController<Aptitude, Long> {
}
