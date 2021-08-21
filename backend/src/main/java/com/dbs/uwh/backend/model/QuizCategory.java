package com.dbs.uwh.backend.model;

import java.util.Date;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.CreationTimestamp;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class QuizCategory {
	@EmbeddedId
    private QuizCategoryId id;
 
    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("quizId")
    private Quiz quiz;
 
    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("categoryId")
    private Category category;
 
    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private Date createdOn;
    
}
