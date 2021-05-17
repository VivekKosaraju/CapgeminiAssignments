package com.vivek.user.Repositry;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.vivek.user.Models.User;

public interface UserInterface extends MongoRepository<User, String>{

}
