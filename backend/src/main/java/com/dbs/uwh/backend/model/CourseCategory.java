package com.dbs.uwh.backend.model;

import java.util.Date;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.CreationTimestamp;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString(of = {"id"})
public class CourseCategory {
	@EmbeddedId
    private CourseCategoryId id;
 
    @ManyToOne
    @MapsId("courseId")
    private Course course;
 
    @ManyToOne
    @MapsId("categoryId")
    private Category category;
 
    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private Date createdOn;
    
}
