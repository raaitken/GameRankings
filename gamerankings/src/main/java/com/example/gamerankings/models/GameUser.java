package com.example.gamerankings.models;

import javax.persistence.*;

@Entity
@Table(name = "games_users")
public class GameUser {

    @EmbeddedId
    private GameUserId id = new GameUserId();

    @ManyToOne
    @MapsId("game_id")
    private Game game;

    @ManyToOne
    @MapsId("user_id")
    private User user;

    private int rating;

    public GameUser(Game game, User user, int rating) {
        this.game = game;
        this.user = user;
        this.rating = rating;
    }

    public GameUser(){

    }
}
