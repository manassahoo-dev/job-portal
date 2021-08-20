package com.dbs.uwh.backend.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Data
@EqualsAndHashCode(callSuper = false)
public class BatchCounselling {
	@EmbeddedId
    private BatchColunsellingId id;
 
    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("batchId")
    private Batch batch;
 
    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("CounsellingId")
    private Counselling counselling;
 
    @Column(name = "created_on")
    private Date createdOn = new Date();
}
