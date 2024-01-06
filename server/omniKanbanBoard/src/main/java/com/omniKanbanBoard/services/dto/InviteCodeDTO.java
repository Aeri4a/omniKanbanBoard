package com.omniKanbanBoard.services.dto;

import lombok.Data;

@Data
public class InviteCodeDTO {
    private String inviteCode;

    public InviteCodeDTO() {}

    public InviteCodeDTO(String inviteCode) {
        this.inviteCode = inviteCode;
    }

    public void setInviteCode(String inviteCode) {
        this.inviteCode = inviteCode;
    }

    public String getInviteCode() {
        return this.inviteCode;
    }
}
