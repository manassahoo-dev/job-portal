package com.dbs.uwh.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dbs.uwh.backend.model.User;

@RestController
@RequestMapping("/users")
public class UserController extends GenericRestController<User, Long> {
}
