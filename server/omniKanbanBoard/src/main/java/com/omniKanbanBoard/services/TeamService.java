package com.omniKanbanBoard.services;

import com.omniKanbanBoard.services.dto.TeamDTO;
import com.omniKanbanBoard.models.Team;

public interface TeamService {

    Team getTeamByInviteCode(String inviteCode);

    TeamDTO create(TeamDTO teamDTO);

    void delete(Long id);
}
