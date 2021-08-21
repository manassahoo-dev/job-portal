package com.dbs.uwh.backend.model.mapping;

import java.util.Date;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.CreationTimestamp;

import com.dbs.uwh.backend.model.Category;
import com.dbs.uwh.backend.model.Counselling;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class CounsellingCategory {
	@EmbeddedId
    private CounsellingCategoryId id;
 
    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("counsellingId")
    private Counselling counselling;
 
    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("categoryId")
    private Category category;
 
    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private Date createdOn;
    
}
