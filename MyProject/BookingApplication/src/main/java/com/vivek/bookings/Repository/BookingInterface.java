package com.vivek.bookings.Repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.vivek.bookings.Models.Bookings;



public interface BookingInterface extends MongoRepository<Bookings, String>{
	
	List<Bookings> findAllByUserEmail(String email);
}
