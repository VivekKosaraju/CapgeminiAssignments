package com.vivek.rating.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vivek.rating.Exceptions.*;
import com.vivek.rating.Models.Rating;
import com.vivek.rating.Repository.RatingInterface;

@Service
public class Services {

	@Autowired
	RatingInterface ratingInterface;
	
	public List<Rating> getRatings() {
		return ratingInterface.findAll();
	}
	
	public void addRating(Rating rating) {
		ratingInterface.save(rating);
	}
	
	public String deleteRating(String id) throws com.vivek.rating.Exceptions.ResourceNotFoundException{
		 		Rating rating =  ratingInterface.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Rating not found") );	
		 		ratingInterface.delete(rating);
		return "Succefully Deleted";
	}
}
