package com.mike.musicLesson.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.mike.musicLesson.models.Lesson;
import com.mike.musicLesson.models.User;
import com.mike.musicLesson.services.LessonService;
import com.mike.musicLesson.services.UserService;

@Controller
@RequestMapping("/lessons")
public class LessonController {
	@Autowired 
	private UserService uService;
	@Autowired private LessonService lService;
	
	//dashboard page
	@RequestMapping("")
	public String dashboard(Model viewModel, HttpSession session) {
		Long userId = (Long)session.getAttribute("user_id");
		viewModel.addAttribute("user", this.uService.findUserById(userId));
		viewModel.addAttribute("lessons", this.lService.getAllLessons());
		return "dashboard.jsp";
	}
	
	// new page
	@RequestMapping("/new")
	private String newLesson(@ModelAttribute("lesson") Lesson lesson, HttpSession session, Model viewModel) {
		Long userId = (Long)session.getAttribute("user_id");
		viewModel.addAttribute("user_id", userId);
		return "new.jsp";
	}
	
	// create new lesson
	@PostMapping("")
	private String create(@Valid @ModelAttribute("lesson") Lesson lesson, HttpSession session, BindingResult result, Model viewModel) {
		if(result.hasErrors()) {
			Long userId = (Long)session.getAttribute("user_id");
			viewModel.addAttribute("user_id", userId);
			return "new.jsp";
		}
		this.lService.createNew(lesson);
		return "redirect:/lessons";
	}
	
	// show page
	@RequestMapping("/{id}")
	private String show(@PathVariable("id") Long id, Model viewModel, @ModelAttribute("lesson") Lesson lesson) {
		viewModel.addAttribute("lesson", this.lService.getById(id));
		return "show.jsp";
	}
	
	//add Enrollment
	@RequestMapping("/enroll/{id}")
	public String add(@PathVariable("id") Long id, HttpSession session) {
		Long userId = (Long)session.getAttribute("user_id");
		Long lessonId = id;
		User student = this.uService.findUserById(userId);
		Lesson theLesson = this.lService.getById(lessonId);
		this.lService.addEnrollment(student, theLesson);
		return "redirect:/lessons";
	}
	
	//remove enrollment
	@RequestMapping("/remove/{id}")
	public String remove(@PathVariable("id") Long id, HttpSession session) {
		Long userId = (Long)session.getAttribute("user_id");
		Long lessonId = id;
		User student = this.uService.findUserById(userId);
		Lesson theLesson = this.lService.getById(lessonId);
		this.lService.removeEnrollment(student, theLesson);
		return "redirect:/lessons";
	}
	
	@RequestMapping(value="/delete/{id}", method=RequestMethod.DELETE)
	public String delete(@PathVariable("id") Long id) {
		lService.deleteLesson(id);
		return "redirect:/lessons";
	}
	//update Lesson
	@RequestMapping(value="/update/{id}", method=RequestMethod.PUT)
	public String update(@Valid @ModelAttribute("lesson") Lesson updatedLesson, BindingResult result) {
		if(result.hasErrors()) {
			return "show.jsp";
		} else {
			lService.updateLesson(updatedLesson);
			return "redirect:/lessons";
		}
	}
}
