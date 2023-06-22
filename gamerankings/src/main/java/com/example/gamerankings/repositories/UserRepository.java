package com.example.gamerankings.repositories;

import com.example.gamerankings.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
