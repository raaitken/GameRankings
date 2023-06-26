package com.example.gamerankings.repositories;

import com.example.gamerankings.models.Game;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GameRepository extends JpaRepository<Game, Long> {
    Game findBySlug(String slug);
}
