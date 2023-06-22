package com.example.gamerankings.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "games")
public class Game {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column
    private String image;

    @Column
    private String genre;

    @Column
    private String description;

    @Column(name = "year_of_release")
    private int yearOfRelease;

    @Column
    private ArrayList<Platform> platforms;

    @OneToMany(mappedBy = "game")
    private Set<GameUser> gameUsers = new HashSet<>();

    @ManyToMany
    @JsonIgnoreProperties({"games"})
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "games_users",
            joinColumns = { @JoinColumn(
                    name = "game_id",
                    nullable = false,
                    updatable = false)
            },
            inverseJoinColumns = { @JoinColumn(
                    name = "user_id",
                    nullable = false,
                    updatable = false)
            }
    )
    private List<User> users;

    public Game(String name, String image, String genre, String description, int yearOfRelease, ArrayList<Platform> platforms) {
        this.name = name;
        this.image = image;
        this.genre = genre;
        this.description = description;
        this.yearOfRelease = yearOfRelease;
        this.platforms = platforms;
        this.gameUsers = new HashSet<>();
        this.users = new ArrayList<>();
    }

    public Game(){

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getYearOfRelease() {
        return yearOfRelease;
    }

    public void setYearOfRelease(int yearOfRelease) {
        this.yearOfRelease = yearOfRelease;
    }

    public ArrayList<Platform> getPlatforms() {
        return platforms;
    }

    public void setPlatforms(ArrayList<Platform> platforms) {
        this.platforms = platforms;
    }

    public Set<GameUser> getGameUsers() {
        return gameUsers;
    }

    public void setGameUsers(Set<GameUser> gameUsers) {
        this.gameUsers = gameUsers;
    }

    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }
}
