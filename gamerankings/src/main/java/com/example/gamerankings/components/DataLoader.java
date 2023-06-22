package com.example.gamerankings.components;

import com.example.gamerankings.models.Game;
import com.example.gamerankings.models.Platform;
import com.example.gamerankings.models.User;
import com.example.gamerankings.repositories.GameRepository;
import com.example.gamerankings.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

@Profile("!test")
@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    GameRepository gameRepository;
    @Autowired
    UserRepository userRepository;

    ArrayList<Platform> platforms = new ArrayList<>();

    public DataLoader() {

    }

    @Override
    public void run(ApplicationArguments args) throws Exception {
        platforms.add(Platform.PS5);
        Game ff16 = new Game("Final Fantasy XVI", "imgsrc", "RPG", "Description", 2023, platforms);
        gameRepository.save(ff16);

        User ross = new User("rossaitken", "password");
        userRepository.save(ross);
    }
}
