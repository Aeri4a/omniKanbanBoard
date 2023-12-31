package com.omniKanbanBoard.services;

import com.omniKanbanBoard.models.User;
import com.omniKanbanBoard.services.dto.InviteCodeDTO;
import com.omniKanbanBoard.services.dto.TeamDTO;
import com.omniKanbanBoard.services.dto.UserDTO;

import java.util.List;

public interface UserService {
    List<UserDTO> getAllUsers();

    List<UserDTO> getAllByTeam(Long teamId);

    TeamDTO joinTeamByInviteCode(InviteCodeDTO inviteCodeDTO);

    void leaveCurrentTeam();
}
