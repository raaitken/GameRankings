package com.example.gamerankings.controllers;

import com.example.gamerankings.models.Game;
import com.example.gamerankings.models.Platform;
import com.example.gamerankings.repositories.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import static java.lang.Integer.parseInt;

@RestController
public class GameController {

    @Autowired
    GameRepository gameRepository;

    @GetMapping(value = "/games")
    public ResponseEntity<List<Game>> getAllGames(){
        return new ResponseEntity<>(gameRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/games/{id}")
    public ResponseEntity<Optional<Game>> getGame(@PathVariable Long id){
        return new ResponseEntity<>(gameRepository.findById(id), HttpStatus.OK);
    }

//    @PostMapping(value = "/games")
//    public ResponseEntity<Game> postGame(@RequestBody Game game){
//        System.out.println(game);
//        gameRepository.save(game);
//        return new ResponseEntity<>(game, HttpStatus.CREATED);
//    }

    @PostMapping(value = "/games")
    public ResponseEntity<Game> postGame(@RequestBody Map<String, Object> payload){
        Object id = payload.get("id");
        Object name = payload.get("name");
        Object slug = payload.get("slug");
        Object image = payload.get("image");
        Object genre = payload.get("genre");
        Object description = payload.get("description");
        Object yearOfRelease = payload.get("year");
        Object platform = payload.get("platform");
        ArrayList<Platform> platforms = new ArrayList<Platform>();
        Game newGame = new Game((long) parseInt(id.toString()), name.toString(), slug.toString(), image.toString(), "", "description", 1900, platforms);
        gameRepository.save(newGame);
        return new ResponseEntity<>(newGame, HttpStatus.CREATED);
    }
}
