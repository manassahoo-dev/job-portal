package com.dbs.uwh.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dbs.uwh.backend.model.User;

import io.swagger.annotations.Api;

@RestController
@RequestMapping("/users")
@Api(tags = "Users", value = "users", description = "Users API")
public class UserController extends GenericRestController<User, Long> {
}
