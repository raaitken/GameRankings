package com.example.gamerankings.controllers;

import com.example.gamerankings.models.Game;
import com.example.gamerankings.models.GameUser;
import com.example.gamerankings.models.GameUserId;
import com.example.gamerankings.models.User;
import com.example.gamerankings.repositories.GameRepository;
import com.example.gamerankings.repositories.GameUserRepository;
import com.example.gamerankings.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import static java.lang.Double.parseDouble;

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

    @GetMapping(value = "/gameratings/{id}")
    public ResponseEntity<Optional<GameUser>> getGame(@PathVariable Long id){
        return new ResponseEntity<>(gameUserRepository.findById(id), HttpStatus.OK);
    }
    @PostMapping(value = "/gameratings")
    public ResponseEntity<GameUser> postGameUser(@RequestBody Map<String, Object> payload){
        Object gameSlug = payload.get("game");
        Object userName = payload.get("user");
        Object rating = payload.get("rating");
        Game game = gameRepository.findBySlug(gameSlug.toString());
        User user = userRepository.findByName(userName.toString());
        GameUser newGameUser = new GameUser(game, user, parseDouble(rating.toString()));
        gameUserRepository.save(newGameUser);
        return new ResponseEntity<>(newGameUser, HttpStatus.CREATED);
    }

    @PatchMapping(value = "/gameratings/update")
    public ResponseEntity<GameUser> updateGameUser(@RequestBody Map<String, Object> payload) {
        Object id = payload.get("id");
        Object gameSlug = payload.get("game");
        Object userName = payload.get("user");
        Object rating = payload.get("rating");
        Game game = gameRepository.findBySlug(gameSlug.toString());
        User user = userRepository.findByName(userName.toString());
        GameUser gameUser = gameUserRepository.findById((GameUserId) id);
        gameUser.setRating(parseDouble(rating.toString()));
        gameUserRepository.save(gameUser);
        return new ResponseEntity<>(gameUser, HttpStatus.OK);
    }
}
