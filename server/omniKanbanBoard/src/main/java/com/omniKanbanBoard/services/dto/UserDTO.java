package com.omniKanbanBoard.services.dto;

import com.omniKanbanBoard.models.User;
import lombok.Data;

@Data
public class UserDTO {

    private Long id;

    private String username;

    private TeamDTO team;

    public UserDTO() {}

    public UserDTO(User user) {
        this.id = user.getId();
        this.username = user.getUsername();
        this.team = new TeamDTO(user.getTeam());
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return this.id;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getUsername() {
        return this.username;
    }

    public void setTeam(TeamDTO team) {
        this.team = team;
    }

    public TeamDTO getTeam() {
        return this.team;
    }
}
