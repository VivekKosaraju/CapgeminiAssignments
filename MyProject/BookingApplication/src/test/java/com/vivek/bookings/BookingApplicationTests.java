package com.vivek.bookings;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;import org.junit.platform.engine.TestExecutionResult.Status;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.vivek.bookings.Models.Bookings;


@SpringBootTest
@AutoConfigureMockMvc
class BookingApplicationTests {

	private static final ObjectMapper OBJECT_MAPPER = new ObjectMapper();
	
	@Autowired
	private MockMvc mockMvc;
	
	
	@Test
	void test1() throws Exception{
		Bookings bookings = new Bookings();
		bookings.setFirstName("testing1");
		bookings.setFlightId(5);
		bookings.setGender("Male");
		bookings.setLastName("testing1");
		bookings.setPassengerAge(35);
		bookings.setPassengerEmail("testing@gmail.com");
		bookings.setPassengerPhone("1234567890");
		bookings.setUserEmail("testing1@gmail.com");
		
		String postValue = mapToJson(bookings);
		
		
		MvcResult storyResult = mockMvc.perform(MockMvcRequestBuilders
				.post("/bookings")
				.contentType(MediaType.APPLICATION_JSON)
				.content(postValue))
				.andExpect(status().isCreated())
				.andReturn();
		
	}
	
	
	String mapToJson(Bookings booking) throws JsonProcessingException
	{
		return OBJECT_MAPPER.writeValueAsString(booking);
	}
	
	
	void createBooking() throws Exception{
		Bookings bookings = new Bookings();
		bookings.setFirstName("testing1");
		bookings.setFlightId(5);
		bookings.setGender("Male");
		bookings.setLastName("testing1");
		bookings.setPassengerAge(35);
		bookings.setPassengerEmail("testing@gmail.com");
		bookings.setPassengerPhone("1234567890");
		bookings.setUserEmail("testing1@gmail.com");
		
		String postValue = mapToJson(bookings);
		
		
		MvcResult storyResult = mockMvc.perform(MockMvcRequestBuilders
				.post("/bookings")
				.contentType(MediaType.APPLICATION_JSON)
				.content(postValue))
				.andExpect(status().isCreated())
				.andReturn();
		
	}
	

}
