package com.vivek.bookings;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
@EnableEurekaClient
public class BookingApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(BookingApplication.class, args);
	}
	
	@Override
	public void run(String... args) throws Exception {
		
		
	}
	
	@LoadBalanced
	@Bean
	public RestTemplate geRestTemplate() {
		return new RestTemplate();
	}

}
