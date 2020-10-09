package com.mike.musicLesson;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class MusicLessonApplication {

	public static void main(String[] args) {
//		SpringApplication.run(MusicLessonApplication.class, args);
		SpringApplicationBuilder builder = new SpringApplicationBuilder(MusicLessonApplication.class);

		builder.headless(false);

		ConfigurableApplicationContext context = builder.run(args);
	}

}
