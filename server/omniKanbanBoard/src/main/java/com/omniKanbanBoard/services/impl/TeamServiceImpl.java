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

import java.util.List;

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

    public Team getTeamByInviteCode(String inviteCode) {
        return teamRepository.findByInviteCode(inviteCode);
    }

    public TeamDTO create(TeamDTO teamDTO) {
        Team saveTeam = new Team();
        saveTeam.setName(teamDTO.getName());
        User owner = userRepository.findById(teamDTO.getOwnerId()).get();
        saveTeam.setOwner(owner);
        saveTeam.setInviteCode("123456789"); // to change later - generate new

        Team newTeam = teamRepository.save(saveTeam);
        owner.setTeam(newTeam);
        userRepository.save(owner);

        return teamMapper.toDto(newTeam);
    }

    public void delete(Long id) {
        // sth to do in a different way later
        List<User> attachedUsers = userRepository.findAllByTeamId(id);
        attachedUsers.stream().forEach(user -> {
           user.setTeam(null);
           userRepository.save(user);
        });
        teamRepository.deleteById(id);
    }
}
