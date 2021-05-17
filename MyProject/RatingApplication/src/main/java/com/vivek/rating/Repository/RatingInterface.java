package com.vivek.rating.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.vivek.rating.Models.Rating;

public interface RatingInterface extends MongoRepository<Rating, String>{

}
