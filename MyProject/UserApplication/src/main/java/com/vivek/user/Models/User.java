package com.vivek.user.Models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collation = "Users")
public class User {
	
	@Id
	private String email;
	private String password;
	private String role;
	private String fullName;
	private String mobileNumber;
	public User(String email, String password, String role, String fullName, String mobileNumber) {
		super();
		this.email = email;
		this.password = password;
		this.role = role;
		this.fullName = fullName;
		this.mobileNumber = mobileNumber;
	}
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getFullName() {
		return fullName;
	}
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	public String getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	
	
	
}
