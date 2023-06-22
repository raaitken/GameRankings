package com.example.gamerankings.components;

import com.example.gamerankings.models.Game;
import com.example.gamerankings.models.GameUser;
import com.example.gamerankings.models.Platform;
import com.example.gamerankings.models.User;
import com.example.gamerankings.repositories.GameRepository;
import com.example.gamerankings.repositories.GameUserRepository;
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
    @Autowired
    GameUserRepository gameUserRepository;

    ArrayList<Platform> platforms = new ArrayList<>();

    public DataLoader() {

    }

    @Override
    public void run(ApplicationArguments args) {
        platforms.add(Platform.PS5);
        Game ff16 = new Game("Final Fantasy XVI", "imgsrc", "RPG", "Description", 2023, platforms);
        gameRepository.save(ff16);

        Game diablo4 = new Game("Diablo 4", "imgsrc", "ARPG", "Description", 2023, platforms);
        gameRepository.save(diablo4);

        User ross = new User("rossaitken", "password");
        userRepository.save(ross);

        User sam = new User("samhouston", "password");
        userRepository.save(sam);

        GameUser gameUser = new GameUser(ff16, ross);
        GameUser gu1 = new GameUser(diablo4, sam);
        gameUserRepository.save(gameUser);
        gameUserRepository.save(gu1);
    }
}
