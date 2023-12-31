package com.example.gamerankings;

import com.example.gamerankings.models.Game;
import com.example.gamerankings.models.GameUser;
import com.example.gamerankings.models.User;
import com.example.gamerankings.repositories.GameRepository;
import com.example.gamerankings.repositories.GameUserRepository;
import com.example.gamerankings.repositories.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

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
		Game game1 = new Game("Wii Sports", "wii-sports", "imgsrc", "Sports", "Game about sports on the Wii", 2006);
		gameRepository.save(game1);
		Game game2 = new Game("Final Fantasy XVI", "final-fantasy-xvi", "imgsrc", "RPG", "Description", 2023);
		gameRepository.save(game2);

		User user1 = new User("samhouston", "password");
		userRepository.save(user1);

		GameUser gu1 = new GameUser(game1, user1, 1565);
		gameUserRepository.save(gu1);
		GameUser gu2 = new GameUser(game2, user1, 1243);
		gameUserRepository.save(gu2);
	}

	@Test
	public void canFindGameBySlug(){
		Game game = gameRepository.findBySlug("final-fantasy-xvi");
		assertEquals("Final Fantasy XVI", game.getName());
	}

}
