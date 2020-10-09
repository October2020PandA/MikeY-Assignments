package com.mike.musicLesson.validators;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;

import com.mike.musicLesson.models.User;
import com.mike.musicLesson.repositories.UserRepository;

@Component
public class UserValidator {
	@Autowired
	private UserRepository uRepo;
	
	public boolean supports(Class<?> clazz) {
		return User.class.equals(clazz);
	}
	
	//custom validator
	public void validate(Object target, Errors errors) {
		User user = (User) target;
		
		if (!user.getPassword().equals(user.getPasswordConfirmation())) {
			errors.rejectValue("passwordConfirmation", "Match", "Passwords do not match!!!!!!!!");
		}
		
		//make sure email is unique in the DB
		if (this.uRepo.existsByEmail(user.getEmail())) {
			errors.rejectValue("email", "Unique", "Email has already been registered!");
		}
	}
}
