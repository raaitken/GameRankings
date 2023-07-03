package com.example.gamerankings.repositories;

import com.example.gamerankings.models.GameUser;
import com.example.gamerankings.models.GameUserId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GameUserRepository extends JpaRepository<GameUser, Long> {
    GameUser findById(GameUserId id);
}
