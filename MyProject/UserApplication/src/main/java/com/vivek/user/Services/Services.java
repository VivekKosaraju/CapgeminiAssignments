package com.vivek.user.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vivek.user.Exceptions.ResourceNotFoundException;
import com.vivek.user.Models.User;
import com.vivek.user.Repositry.UserInterface;

@Service
public class Services {
	
	@Autowired
	UserInterface userInterface;
	
	public void addUser(User user) {
		userInterface.save(user);
	}
	
	
	public List<User> getUsers() {
		return userInterface.findAll();
	}
	
	
	public User getUser(String id) throws ResourceNotFoundException{
		return userInterface.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("User not found for this id :: " + id));
	}
	
	
	
	public User updateUser(String id, User u) throws ResourceNotFoundException{
		User user =  userInterface.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("User not found for this id :: " + id));
		user = u;
		user.setEmail(id);
		userInterface.save(user);
		return user;
	}
	

	
	public User deleteUser(String id) throws ResourceNotFoundException{
		User user =  userInterface.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("User not found for this id :: " + id));
		userInterface.delete(user);
		return user;
	}
	
	

}
