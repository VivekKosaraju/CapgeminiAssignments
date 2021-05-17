package com.vivek.rating.Models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Rating {
	
	@Id
	private String reviewId;
	private String userEmail;
	private int stars;
	private String review;
	
	public Rating() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Rating(String reviewId, String userEmail, int stars, String review) {
		super();
		this.reviewId = reviewId;
		this.userEmail = userEmail;
		this.stars = stars;
		this.review = review;
	}
	public String getReviewId() {
		return reviewId;
	}
	public void setReviewId(String reviewId) {
		this.reviewId = reviewId;
	}
	public String getUserEmail() {
		return userEmail;
	}
	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}
	public int getStars() {
		return stars;
	}
	public void setStars(int stars) {
		this.stars = stars;
	}
	public String getReview() {
		return review;
	}
	public void setReview(String review) {
		this.review = review;
	}
	
	
	
	
}
