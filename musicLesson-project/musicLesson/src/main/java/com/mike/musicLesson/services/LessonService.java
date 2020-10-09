package com.mike.musicLesson.services;

import java.util.List;

import javax.swing.JOptionPane;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mike.musicLesson.models.Lesson;
import com.mike.musicLesson.models.User;
import com.mike.musicLesson.repositories.LessonRepository;

@Service
public class LessonService {
	@Autowired
	private LessonRepository lRepo;
	
	//get all the lessons
	public List<Lesson> getAllLessons() {
		return this.lRepo.findAll();
	}
	
	// get one by id
	public Lesson getById(Long id) {
		return this.lRepo.findById(id).orElse(null);
	}
	
	public Lesson createNew(Lesson lesson) {
		return this.lRepo.save(lesson);
	}
	
	//add enrollment functionality
	public void addEnrollment(User user, Lesson lesson) {
		//get the list of students from the lesson model
		List<User> students = lesson.getStudents();
		// add the students to the lesson
		students.add(user);
		//update the db and save
		JOptionPane.showMessageDialog(null, "Congratulations, you have successfully enrolled!");
		this.lRepo.save(lesson);
	}
	
	//remove enrollment (un-enroll)
	public void removeEnrollment(User user, Lesson lesson) {
		List<User> students = lesson.getStudents();
		//remove student from lesson
		students.remove(user);
		//update db
//		JOptionPane.showMessageDialog(null, "You have been successfully un-enrolled");
		this.lRepo.save(lesson);
	}
	
	//delete a lesson
	public void deleteLesson(Long id) {
		lRepo.deleteById(id);
	}
	
	//update lesson
	public Lesson updateLesson(Long id, Lesson updatedLesson) {
		return this.lRepo.save(updatedLesson);
	}
	public Lesson updateLesson(Lesson updatedLesson) {
		return this.lRepo.save(updatedLesson);
	}
}
