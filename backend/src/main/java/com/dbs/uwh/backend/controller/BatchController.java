package com.dbs.uwh.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dbs.uwh.backend.model.Batch;

import io.swagger.annotations.Api;

@RestController
@RequestMapping("/batches")
@Api(tags = "Batches", value = "batches", description = "Batches API")
public class BatchController extends GenericRestController<Batch, Long> {
}
