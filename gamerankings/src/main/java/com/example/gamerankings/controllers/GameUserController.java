package com.example.gamerankings.controllers;

import com.example.gamerankings.models.GameUser;
import com.example.gamerankings.repositories.GameRepository;
import com.example.gamerankings.repositories.GameUserRepository;
import com.example.gamerankings.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class GameUserController {

    @Autowired
    GameUserRepository gameUserRepository;
    @Autowired
    GameRepository gameRepository;
    @Autowired
    UserRepository userRepository;

    @GetMapping(value = "/gameratings")
    public ResponseEntity<List<GameUser>> getAllGamesUsers(){
        return new ResponseEntity<>(gameUserRepository.findAll(), HttpStatus.OK);
    }

//    @PostMapping(value = "/gameratings")
//    public ResponseEntity<GameUser> postGameUser(@RequestBody Map<String, Object> payload){
//        Object game = payload.get("game");
//        Object user = payload.get("user");
//        Object rating = payload.get("rating");
//        GameUser newGameUser = new GameUser((Game) game, (User) user, parseDouble(rating.toString()));
//        gameUserRepository.save(newGameUser);
//        return new ResponseEntity<>(newGameUser, HttpStatus.CREATED);
//    }

    @PostMapping(value = "/gameratings")
    public ResponseEntity<GameUser> postGameUser(@RequestBody GameUser gameUser){
        gameUserRepository.save(gameUser);
        return new ResponseEntity<>(gameUser, HttpStatus.CREATED);
    }

    @PatchMapping(value = "/gameratings/{id}")
    public ResponseEntity<GameUser> updateGameUser(@RequestBody GameUser gameUser) {
        gameUserRepository.save(gameUser);
        return new ResponseEntity<>(gameUser, HttpStatus.OK);
    }
}
