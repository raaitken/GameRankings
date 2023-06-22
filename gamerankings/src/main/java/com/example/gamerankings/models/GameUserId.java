package com.example.gamerankings.models;

import javax.persistence.Embeddable;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class GameUserId implements Serializable {

    private static final long serialVersionUID = 1L;

    private Long game_id;
    private Long user_id;

    public GameUserId(){

    }

    public GameUserId(Long game_id, Long user_id) {
        super();
        this.game_id = game_id;
        this.user_id = user_id;
    }

    public Long getGame_id() {
        return game_id;
    }

    public void setGame_id(Long game_id) {
        this.game_id = game_id;
    }

    public Long getUser_id() {
        return user_id;
    }

    public void setUser_id(Long user_id) {
        this.user_id = user_id;
    }

    @Override
    public int hashCode(){
        final int prime = 31;
        int result = 1;
        result = prime * result + ((game_id == null) ? 0 : game_id.hashCode());

        result = prime * result + ((user_id == null) ? 0 : user_id.hashCode());

        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        GameUserId other = (GameUserId) obj;
        return Objects.equals(getGame_id(), other.getGame_id()) && Objects.equals(getUser_id(), other.getUser_id());
    }
}
