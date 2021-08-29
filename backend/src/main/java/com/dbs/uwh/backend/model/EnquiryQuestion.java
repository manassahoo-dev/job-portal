package com.dbs.uwh.backend.model;

import javax.persistence.Entity;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class EnquiryQuestion extends BaseEntity {

	private static final long serialVersionUID = 1L;

	private String question;

	private String answer;

}
