package com.mike.musicLesson.models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;


@Entity
@Table(name="users")
public class User {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	// Validation
	@NotEmpty
	private String firstName;
	@NotEmpty
	private String lastName;
	@Email(message="Email must be valid")
	private String email;
	//Validation
	@Size(min=5, message="Password must be greater than 5 characters")
	private String password;
	@Transient
	private String passwordConfirmation;
	@OneToMany(mappedBy="musician", fetch=FetchType.LAZY)
	private List<Lesson> lessons;
	@ManyToMany(fetch=FetchType.LAZY)
	@JoinTable(
		name="enrollments",
		joinColumns = @JoinColumn(name="user_id"),
		inverseJoinColumns= @JoinColumn(name="lesson_id")
	)
	
	private List<Lesson> attending;
	
	public User() {
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
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

	public String getPasswordConfirmation() {
		return passwordConfirmation;
	}

	public void setPasswordConfirmation(String passwordConfirmation) {
		this.passwordConfirmation = passwordConfirmation;
	}

	public List<Lesson> getLessons() {
		return lessons;
	}

	public void setLessons(List<Lesson> lessons) {
		this.lessons = lessons;
	}

	public List<Lesson> getAttending() {
		return attending;
	}

	public void setAttending(List<Lesson> attending) {
		this.attending = attending;
	}
	

}
