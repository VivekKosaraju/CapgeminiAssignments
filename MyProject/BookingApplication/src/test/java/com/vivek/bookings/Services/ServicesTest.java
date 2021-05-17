package com.vivek.bookings.Services;

import static org.junit.jupiter.api.Assertions.*;

import java.util.Date;


import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.vivek.bookings.Exceptions.ResourceNotFoundException;
import com.vivek.bookings.Models.Bookings;
import com.vivek.bookings.Repository.BookingInterface;


import static org.mockito.Mockito.*;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@SpringBootTest
class ServicesTest {
	
	@Autowired
	private Services services;
	
	@MockBean
	BookingInterface repo;
	

	@Test
	public void addBooking() {
		Bookings booking = new Bookings("123456789","vvv@gmail.com","hii","hello","ppp@gmail.com","123456789",15,"Male",new Date(),10);
		services.addBooking(booking);
		verify(repo,times(1)).save(booking);
	}
	
	@Test
	public void getBookings() {
		when(repo.findAll()).thenReturn(Stream.of(
				new Bookings("123456789","vvv@gmail.com","hii","hello","ppp@gmail.com","123456789",15,"Male",new Date(),10),
				new Bookings("164616492","vvv@gmail.com","hii","hello","ppp@gmail.com","123456789",15,"Male",new Date(),10)).collect(Collectors.toList()));
		assertEquals(2, services.getBookings().size());
	}
	
	@Test
	public void getBookingById() {
		String id = "123456789";
		Bookings bookings = new Bookings("123456789","vvv@gmail.com","hii","hello","ppp@gmail.com","123456789",15,"Male",new Date(),10);
		when(repo.findById(id)).thenReturn(Optional.of(bookings));
	}
	
	@Test
	public void deleteBooking() throws ResourceNotFoundException {
		String id = "123456789";
		Bookings bookings = new Bookings("123456789","vvv@gmail.com","hii","hello","ppp@gmail.com","123456789",15,"Male",new Date(),10);
		when(repo.findById(id)).thenReturn(Optional.of(bookings));
		services.deleteBooking(id);
		verify(repo,times(1)).delete(bookings);

	}
	
	@Test
	public void addBooking2() {
		Bookings booking = new Bookings("236547895","hklo@gmail.com","hii","hello","ppp@gmail.com","123456789",19,"Female",new Date(),10);
		services.addBooking(booking);
		verify(repo,times(1)).save(booking);
	}
	
	@Test
	public void getBookings2() {
		when(repo.findAll()).thenReturn(Stream.of(
				new Bookings("569754236","hello@gmail.com","kkk","hello","ppp@gmail.com","123456789",15,"Male",new Date(),10),
				new Bookings("164616492","vvv@gmail.com","hii","pppp","ppp@gmail.com","123456789",15,"Male",new Date(),10)).collect(Collectors.toList()));
		assertEquals(2, services.getBookings().size());
	}
	
	@Test
	public void getBookingById2() {
		String id = "123456789";
		Bookings bookings = new Bookings("123456789","dkk@gmail.com","hii","hello","ppp@gmail.com","123456789",15,"Male",new Date(),10);
		when(repo.findById(id)).thenReturn(Optional.of(bookings));
	}
	
	@Test
	public void deleteBooking2() throws ResourceNotFoundException {
		String id = "356971023";
		Bookings bookings = new Bookings("356971023","vvv@gmail.com","hii","hello","ppp@gmail.com","123456789",15,"Male",new Date(),10);
		when(repo.findById(id)).thenReturn(Optional.of(bookings));
		services.deleteBooking(id);
		verify(repo,times(1)).delete(bookings);

	}
	
	@Test
	public void addBooking3() {
		Bookings booking = new Bookings("5697136556","vkohli@gmail.com","hii","hello","ppp@gmail.com","123456789",19,"Female",new Date(),10);
		services.addBooking(booking);
		verify(repo,times(1)).save(booking);
	}
	
	@Test
	public void getBookings3() {
		when(repo.findAll()).thenReturn(Stream.of(
				new Bookings("423697112","hello@gmail.com","kkk","hello","ppp@gmail.com","123456789",15,"Male",new Date(),10),
				new Bookings("697113395","vvv@gmail.com","hii","pppp","ppp@gmail.com","123456789",15,"Male",new Date(),10)).collect(Collectors.toList()));
		assertEquals(2, services.getBookings().size());
	}
	
	@Test
	public void getBookingById3() {
		String id = "677136906";
		Bookings bookings = new Bookings("677136906","dkk@gmail.com","hii","hello","ppp@gmail.com","123456789",15,"Male",new Date(),10);
		when(repo.findById(id)).thenReturn(Optional.of(bookings));
	}
	
	@Test
	public void deleteBooking3() throws ResourceNotFoundException {
		String id = "4236987112";
		Bookings bookings = new Bookings("4236987112","vvv@gmail.com","hii","hello","ppp@gmail.com","123456789",15,"Male",new Date(),10);
		when(repo.findById(id)).thenReturn(Optional.of(bookings));
		services.deleteBooking(id);
		verify(repo,times(1)).delete(bookings);

	}

}
