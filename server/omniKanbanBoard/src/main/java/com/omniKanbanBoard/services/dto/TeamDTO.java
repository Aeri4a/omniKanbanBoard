package com.omniKanbanBoard.services.dto;

import com.omniKanbanBoard.models.Team;

public class TeamDTO {

    private Long id;

    private String name;

    private String inviteCode;

    private Long ownerId;

    public TeamDTO() {}

    public TeamDTO(Team team) {
        this.id = team.getId();
        this.name = team.getName();
        this.inviteCode = team.getInviteCode();
        this.ownerId = team.getOwner().getId();
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

    public void setInviteCode(String inviteCode) {
        this.inviteCode = inviteCode;
    }

    public String getInviteCode() {
        return this.inviteCode;
    }

    public void setOwnerId(Long ownerId) {
        this.ownerId = ownerId;
    }

    public Long getOwnerId() {
        return this.ownerId;
    }
}
