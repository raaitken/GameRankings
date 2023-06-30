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
        Game ff16 = new Game("Final Fantasy XVI", "final-fantasy-xvi", "imgsrc", "RPG", "Description", 2023);
        gameRepository.save(ff16);

        platforms.add(Platform.XboxSeries);
        platforms.add(Platform.PC);
        Game diablo4 = new Game("Diablo 4", "diablo-4", "imgsrc", "ARPG", "Description", 2023);
        gameRepository.save(diablo4);

        platforms.clear();
        platforms.add(Platform.NintendoWii);
        Game wiiSports = new Game("Wii Sports", "wii-sports", "imgsrc", "Sports", "Game about sports on the Wii", 2006);
        gameRepository.save(wiiSports);

        Game simpsonsWrestling = new Game("Simpsons Wrestling", "simpsons-wrestling", "imgsrc", "Sports", "description", 2001);
        gameRepository.save(simpsonsWrestling);


        User ross = new User("rossaitken", "password");
        userRepository.save(ross);

        User sam = new User("samhouston", "password");
        userRepository.save(sam);

        GameUser gameUser = new GameUser(ff16, ross, 1824);
        GameUser gu1 = new GameUser(diablo4, ross, 1544);
        GameUser gu2 = new GameUser(wiiSports, ross, 1563);
        GameUser gu3 = new GameUser(simpsonsWrestling, ross, 2000);
        gameUserRepository.save(gameUser);
        gameUserRepository.save(gu1);
        gameUserRepository.save(gu2);
        gameUserRepository.save(gu3);
    }
}
