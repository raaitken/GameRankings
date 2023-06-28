package com.example.gamerankings.controllers;

import com.example.gamerankings.models.User;
import com.example.gamerankings.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
public class UserController {

    @Autowired
    UserRepository userRepository;

    @GetMapping(value = "/users")
    public ResponseEntity<List<User>> getAllUsers() {
        return new ResponseEntity<>(userRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/users/{id}")
    public ResponseEntity<Optional<User>> getPirate(@PathVariable Long id) {
        return new ResponseEntity<>(userRepository.findById(id), HttpStatus.OK);
    }

//    @PostMapping(value = "/users")
//    public ResponseEntity<User> postUser(@RequestBody User user){
//        System.out.println(user);
//        userRepository.save(user);
//        return new ResponseEntity<>(user, HttpStatus.CREATED);
//    }

    @PostMapping(value = "/users")
    public ResponseEntity<User> postUser(@RequestBody Map<String, Object> payload){
        Object name = payload.get("name");
        Object password = payload.get("password");
        User newUser = new User(name.toString(), password.toString());
        userRepository.save(newUser);
        return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }

    @DeleteMapping(value = "/users/{id}")
    public ResponseEntity<User> deleteUser(@PathVariable Long id) {
        Optional<User> userToDelete = userRepository.findById(id);
        userRepository.delete(userToDelete.get());
        return new ResponseEntity<>(userToDelete.get(), HttpStatus.OK);
    }
}
