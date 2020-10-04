package com.mike.musicLesson.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.mike.musicLesson.models.Lesson;

@Repository
public interface LessonRepository extends CrudRepository<Lesson, Long> {
	List<Lesson> findAll();

}
