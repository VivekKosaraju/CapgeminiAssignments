package com.vivek.rating.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vivek.rating.Exceptions.ResourceNotFoundException;
import com.vivek.rating.Models.Rating;
import com.vivek.rating.Services.Services;

@RestController
@RequestMapping("/")
public class Controller {
	
	@Autowired
	private Services services;
	
	@GetMapping("/ratings")
	ResponseEntity<List<Rating>> getRatings(){
		List<Rating> ratings = services.getRatings();
		return ResponseEntity.ok().body(ratings);
	}
	
	@PostMapping("/addRating")
	void addRating(@RequestBody Rating rating){
		services.addRating(rating);
	}
	
	@DeleteMapping("rating/{id}")
	Map<String, Boolean> deleteRating(@PathVariable(value = "id") String id) throws ResourceNotFoundException{
		services.deleteRating(id);
		Map < String, Boolean > response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
	}
}
