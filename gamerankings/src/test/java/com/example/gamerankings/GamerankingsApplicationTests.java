package com.example.gamerankings;

import com.example.gamerankings.models.Game;
import com.example.gamerankings.models.Platform;
import com.example.gamerankings.models.User;
import com.example.gamerankings.repositories.GameRepository;
import com.example.gamerankings.repositories.GameUserRepository;
import com.example.gamerankings.repositories.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;

@SpringBootTest
class GamerankingsApplicationTests {

	@Autowired
	GameRepository gameRepository;

	@Autowired
	UserRepository userRepository;

	@Autowired
	GameUserRepository gameUserRepository;

	@Test
	void contextLoads() {
	}

	@Test
	public void createGameAndUser(){
		ArrayList<Platform> platforms = new ArrayList<>();
		platforms.add(Platform.NintendoWii);
		Game game1 = new Game("Wii Sports", "imgsrc", "Sports", "Game about sports on the Wii", 2006, platforms);
		gameRepository.save(game1);

		User user1 = new User("samhouston", "password");
		userRepository.save(user1);
	}

}
