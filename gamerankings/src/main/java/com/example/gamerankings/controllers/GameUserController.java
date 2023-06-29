package com.example.gamerankings.controllers;

import com.example.gamerankings.models.GameUser;
import com.example.gamerankings.repositories.GameRepository;
import com.example.gamerankings.repositories.GameUserRepository;
import com.example.gamerankings.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

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
//    public ResponseEntity<GameUser> postRating(@RequestBody Map<String, Object> payload) throws InterruptedException {
//        Object game = payload.get("game_id");
//        Object user = payload.get("user_id");
//        Object rating = payload.get("rating");
//
//        GameUser newRating = new GameUser(game, user, parseDouble(rating.toString()));
//        gameUserRepository.save(newRating);
//        return new ResponseEntity<>(newRating, HttpStatus.CREATED);
//    }
}
