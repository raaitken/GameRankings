package com.example.gamerankings.models;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;

@Entity
@Table(name = "games_users")
public class GameUser {

    @EmbeddedId
    private GameUserId id = new GameUserId();

    @ManyToOne
    @JsonBackReference(value = "game-user")
    @MapsId("game_id")
    private Game game;

    @ManyToOne
    @JsonBackReference(value = "user-game")
    @MapsId("user_id")
    private User user;

    private double rating;

    public GameUser(Game game, User user, double rating) {
        this.game = game;
        this.user = user;
        this.rating = rating;
    }

    public GameUser(){

    }

    public GameUserId getId() {
        return id;
    }

    public void setId(GameUserId id) {
        this.id = id;
    }

    public Game getGame() {
        return game;
    }

    public void setGame(Game game) {
        this.game = game;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }
}
