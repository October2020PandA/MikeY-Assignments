package com.mike.musicLesson.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.mike.musicLesson.models.User;
import com.mike.musicLesson.services.UserService;
import com.mike.musicLesson.validators.UserValidator;

@Controller
public class UserController {
	@Autowired
	private UserService uService;
	@Autowired
	private UserValidator validator;
	
	//registration page
	@RequestMapping("/")
	public String registerForm(@ModelAttribute("user") User user) {
		return "index.jsp";
	}
	
	//Register new user
	@PostMapping("/")
    public String registerUser(@Valid @ModelAttribute("user") User user, BindingResult result, HttpSession session) {
        // if result has errors, return the registration page 
		//custom validations
		validator.validate(user, result);
		if (result.hasErrors()) {
			return "index.jsp";
			// else, save the user in the database, save the user id in session, and redirect them to the /home route
		} else {
		User u = uService.registerUser(user);
		session.setAttribute("user_id", u.getId());
		return "redirect:/lessons";
		}
	}
	
	//login for user
	//request for user email/password and authenticate
	@PostMapping("/login")
    public String loginUser(@RequestParam("email") String email, @RequestParam("password") String password, RedirectAttributes redirectAttrs, HttpSession session) {
        // if the user is authenticated, save their user id in session
		boolean isAuthenticated  = uService.authenticateUser(email, password);
    	if(isAuthenticated) {
    		User u = uService.findByEmail(email);
    		session.setAttribute("user_id", u.getId());
    		return "redirect:/lessons";  		
    	} else {
        // else, add error messages and return the login page
    		redirectAttrs.addFlashAttribute("loginError",  "Invalid Credentials. Please try again.");
        	return "redirect:/";
    	}
	}
	
	//LOG OUT
	@RequestMapping("/logout")
    public String logout(HttpSession session) {
        // invalidate session
		session.invalidate();
        // redirect to login page
		return "redirect:/";
    }
}	
