package com.omniKanbanBoard.services.dto;

import com.omniKanbanBoard.models.User;

public class UserDTO {

    private Long id;

    private String name;

    private TeamDTO team;

    public UserDTO() {}

    public UserDTO(User user) {
        this.id = user.getId();
        this.name = user.getName();
        this.team = new TeamDTO(user.getTeam());
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return this.id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return this.name;
    }

    public void setTeam(TeamDTO team) {
        this.team = team;
    }

    public TeamDTO getTeam() {
        return this.team;
    }
}
