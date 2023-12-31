package com.omniKanbanBoard.services.dto;

public class InviteCodeDTO {
    private String inviteCode;

    private Long userId;

    public InviteCodeDTO() {}

    public InviteCodeDTO(String inviteCode, Long userId) {
        this.inviteCode = inviteCode;
        this.userId = userId;
    }

    public void setInviteCode(String inviteCode) {
        this.inviteCode = inviteCode;
    }

    public String getInviteCode() {
        return this.inviteCode;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getUserId() {
        return this.userId;
    }
}
