package com.omniKanbanBoard.services.impl;

import com.omniKanbanBoard.errors.BadRequestInfoException;
import com.omniKanbanBoard.models.Team;
import com.omniKanbanBoard.models.User;
import com.omniKanbanBoard.repositories.UserRepository;
import com.omniKanbanBoard.services.TeamService;
import com.omniKanbanBoard.services.UserService;
import com.omniKanbanBoard.services.dto.TeamDTO;
import com.omniKanbanBoard.repositories.TeamRepository;
import com.omniKanbanBoard.services.mapper.TeamMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class TeamServiceImpl implements TeamService {

    private final TeamRepository teamRepository;
    private final TeamMapper teamMapper;
    private final UserRepository userRepository;

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
        return teamRepository.findByInviteCode(inviteCode)
                .orElseThrow(() -> new BadRequestInfoException("Could not find team", "teamNotFound"));
    }

    public TeamDTO create(TeamDTO teamDTO, User user) {
        Team saveTeam = new Team();
        saveTeam.setName(teamDTO.getName());
        saveTeam.setOwner(user);
        saveTeam.setInviteCode(generateInviteCode());

        Team newTeam = teamRepository.save(saveTeam);
        user.setTeam(newTeam);
        userRepository.save(user);

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

    private String generateInviteCode() {
        List<String> list = new ArrayList<String>();

        for (int i = 0; i < 12; i++)
            list.add(String.valueOf((int)(Math.random() * 10)));

        return String.join("", list);
    }
}
