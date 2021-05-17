package com.vivek.flight.Controller;


import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.vivek.flight.Exceptions.ResourceNotFoundException;
import com.vivek.flight.Models.Bookings;
import com.vivek.flight.Models.Flight;
import com.vivek.flight.Services.Services;



@RestController
@RequestMapping("/")
public class Controller {

	@Autowired
	private Services services;
	
	@GetMapping("/flights")
	public List<Flight> getFlights() {
		return services.getFlights();
	}

	@GetMapping("/flight/{id}")
	public ResponseEntity <Flight> getFlightById(@PathVariable(value = "id") int flightId)
	throws ResourceNotFoundException{
		Flight flight = services.getFlight(flightId);
		return ResponseEntity.ok().body(flight);
	}
	
	
	@PostMapping("/flight/details")
	public  List<Flight> getFlightDetails(@RequestBody List<Bookings> bookings ) throws ResourceNotFoundException{

		return bookings.stream().map(booking -> {
			try {
				Flight flight = services.getFlight(booking.getFlightId());
				return flight;
			} catch (Exception e) {
				return null;
			}
			
		})
		.collect(Collectors.toList());
	}
	
	

	@PutMapping("/flight/{id}")
	public ResponseEntity <Flight> updateFlightById(@PathVariable(value = "id") int flightId, 
			@RequestBody Flight flight) throws ResourceNotFoundException {
			
			Flight updatedFlight = services.updateFlight(flightId, flight);
			return ResponseEntity.ok().body(updatedFlight);
	}

	

	@PostMapping("/flights")
	public void addFlight( @RequestBody Flight flight) {
		//flight.setDate(new Date());
		services.addFlight(flight);
	}
	
	@DeleteMapping("/flight/{id}")
    public Map<String, Boolean> deleteFligh(@PathVariable(value = "id") int flightId)
    throws ResourceNotFoundException {
        services.deleFlight(flightId);
        Map < String, Boolean > response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
	
	//@CrossOrigin(origins = "*")
	@PostMapping("/search")
	public List<Flight> display(@RequestBody Flight flight) throws ResourceNotFoundException{
			System.out.println(flight.getSource());
			return services.getFlightsBySourceAndDestination(flight.getSource(), flight.getDestination(), flight.getDepartDate());
	}
	
}	

