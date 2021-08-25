package com.dbs.uwh.backend.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dbs.uwh.backend.model.CourseCategory;

public interface CourseCategoryDao  extends JpaRepository<CourseCategory, Long> {
}