package com.vivek.flight.Services;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vivek.flight.Exceptions.ResourceNotFoundException;
import com.vivek.flight.Models.Flight;
import com.vivek.flight.Repository.FlightInterface;

@Service
public class Services {

	@Autowired
	FlightInterface flightInterface;

	public void addFlight(Flight flight) {
		flightInterface.save(flight);
	}
	
	public List<Flight> getFlights() {
		return flightInterface.findAll();
	}
	
	public Flight getFlight(int id) throws ResourceNotFoundException{
		return flightInterface.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Flight not found for this id :: " + id));
	}

	public Flight updateFlight(int id, Flight f) throws ResourceNotFoundException{
		Flight flight =  flightInterface.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Flight not found for this id :: " + id));
		flight = f;
		flight.setFlightNumber(id);
		flightInterface.save(flight);
		return flight;
	}
	
	public Flight deleFlight(int id) throws ResourceNotFoundException{
		Flight flight =  flightInterface.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Flight not found for this id :: " + id));
		flightInterface.delete(flight);
		return flight;
	}

	public List<Flight> getFlightsBySourceAndDestination(String source,String destination,LocalDate date) 
		throws ResourceNotFoundException{
		
		List<Flight> flights =  flightInterface.findBySourceAndDestinationAndDepartDate(source, destination, date);
		if(flights.size()==0)
		{
			throw new ResourceNotFoundException("Flights not found");
		}
		return flights;
	}
	
}
