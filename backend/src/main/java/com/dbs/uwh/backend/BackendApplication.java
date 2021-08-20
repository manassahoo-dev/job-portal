package com.dbs.uwh.backend;

import java.time.LocalDate;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class BackendApplication {

	public static void main(String[] args) {

		
		// return
		// String.valueOf(currentYear)+"-"+String.valueOf(currentYear).substring(2);

		SpringApplication.run(BackendApplication.class, args);
		System.out.println("UWH");
	}

}
