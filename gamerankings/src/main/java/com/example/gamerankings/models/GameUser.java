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
        this.rating = 1;
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

    public static float calculateProbability(float rating1, float rating2){
        return 1.0f * 1.0f / (1 + 1.0f * (float) (Math.pow(10, 1.0f * (rating1 - rating2) / 400)));
    }

    public static void EloRating(float Ra, float Rb, int K, boolean d){
        float Pb = calculateProbability(Ra, Rb);

        float Pa = calculateProbability(Rb, Ra);

        if (d) {
            Ra = Ra + K * (1 - Pa);
            Rb = Rb + K * (0 - Pb);
        }

        else {
            Ra = Ra + K * (0 - Pa);
            Rb = Rb + K * (1 - Pb);
        }

        System.out.print("Updated Ratings:-\n");

        System.out.print(
                "Ra = "
                        + (Math.round(Ra * 1000000.0) / 1000000.0)
                        + " Rb = "
                        + Math.round(Rb * 1000000.0) / 1000000.0);
    }
}
