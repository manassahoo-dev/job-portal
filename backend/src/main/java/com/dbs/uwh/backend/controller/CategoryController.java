package com.dbs.uwh.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dbs.uwh.backend.model.Category;

import io.swagger.annotations.Api;

@RestController
@RequestMapping("/categories")
@Api(tags = "categories", value = "categories", description = "categories API")
public class CategoryController extends GenericRestController<Category, Long> {

}
