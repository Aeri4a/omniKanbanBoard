package com.omniKanbanBoard.services;

import com.omniKanbanBoard.models.User;
import com.omniKanbanBoard.services.dto.TeamDTO;
import com.omniKanbanBoard.services.dto.UserDTO;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;

public interface UserService {

    UserDetailsService userDetailsService();

    UserDTO getCurrentDTO();

    List<UserDTO> getAllUsers();

    List<UserDTO> getAllByTeam(Long teamId);

    TeamDTO joinTeamByInviteCode(String inviteCode, User user);

    void leaveCurrentTeam(User user);

    User getCurrentUser();
}
