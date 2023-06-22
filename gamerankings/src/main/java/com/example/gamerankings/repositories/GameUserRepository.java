package com.example.gamerankings.repositories;

import com.example.gamerankings.models.GameUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GameUserRepository extends JpaRepository<GameUser, Long> {
}
