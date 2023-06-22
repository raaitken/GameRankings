package com.example.gamerankings.controllers;

import com.example.gamerankings.models.GameUser;
import com.example.gamerankings.repositories.GameUserRepository;
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

    @GetMapping(value = "/gameratings")
    public ResponseEntity<List<GameUser>> getAllGamesUsers(){
        return new ResponseEntity<>(gameUserRepository.findAll(), HttpStatus.OK);
    }
}
