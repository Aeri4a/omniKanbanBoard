package com.omniKanbanBoard.services.impl;

import com.omniKanbanBoard.models.Team;
import com.omniKanbanBoard.models.User;
import com.omniKanbanBoard.repositories.UserRepository;
import com.omniKanbanBoard.services.TeamService;
import com.omniKanbanBoard.services.dto.TeamDTO;
import com.omniKanbanBoard.repositories.TeamRepository;
import com.omniKanbanBoard.services.mapper.TeamMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class TeamServiceImpl implements TeamService {

    private final TeamRepository teamRepository;

    private final UserRepository userRepository;

    private final TeamMapper teamMapper;

    public TeamServiceImpl(
            TeamRepository teamRepository,
            TeamMapper teamMapper,
            UserRepository userRepository
    ) {
        this.teamRepository = teamRepository;
        this.teamMapper = teamMapper;
        this.userRepository = userRepository;
    }

    public TeamDTO create(TeamDTO teamDTO) {
        Team saveTeam = new Team();
        saveTeam.setName(teamDTO.getName());
        User owner = userRepository.findById(teamDTO.getOwnerId()).get();
        saveTeam.setOwner(owner);
        saveTeam.setInviteCode("123456789");

        Team newTeam = teamRepository.save(saveTeam);
        owner.setTeam(newTeam);
        userRepository.save(owner);

        return teamMapper.toDto(newTeam);
    }
}
