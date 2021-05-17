package com.vivek.flight.Repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;


import com.vivek.flight.Models.Flight;

public interface FlightInterface extends MongoRepository<Flight, Integer> {

		List<Flight>  findBySourceAndDestinationAndDepartDate(String source,String destination,LocalDate date );
}
