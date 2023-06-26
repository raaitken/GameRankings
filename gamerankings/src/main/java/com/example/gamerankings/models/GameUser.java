package com.example.gamerankings.models;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;

@Entity
@Table(name = "games_users")
public class GameUser {

    @EmbeddedId
    private GameUserId id = new GameUserId();

    @ManyToOne
    @JsonBackReference
    @MapsId("game_id")
    private Game game;

    @ManyToOne
    @JsonBackReference
    @MapsId("user_id")
    private User user;

    private int rating;

    public GameUser(Game game, User user) {
        this.game = game;
        this.user = user;
        this.rating = 1200;
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

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }
}
