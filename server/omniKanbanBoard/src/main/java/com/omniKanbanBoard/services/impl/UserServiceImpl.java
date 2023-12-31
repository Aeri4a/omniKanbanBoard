package com.omniKanbanBoard.services.impl;

import com.omniKanbanBoard.models.Team;
import com.omniKanbanBoard.models.User;
import com.omniKanbanBoard.repositories.UserRepository;
import com.omniKanbanBoard.services.TeamService;
import com.omniKanbanBoard.services.UserService;
import com.omniKanbanBoard.services.dto.InviteCodeDTO;
import com.omniKanbanBoard.services.dto.TeamDTO;
import com.omniKanbanBoard.services.dto.UserDTO;
import com.omniKanbanBoard.services.mapper.TeamMapper;
import com.omniKanbanBoard.services.mapper.UserMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    private final UserMapper userMapper;

    private final TeamService teamService;

    private final TeamMapper teamMapper;

    public UserServiceImpl(
            UserRepository userRepository,
            UserMapper userMapper,
            TeamService teamService,
            TeamMapper teamMapper
    ) {
        this.userRepository = userRepository;
        this.userMapper = userMapper;
        this.teamService = teamService;
        this.teamMapper = teamMapper;
    }

    public List<UserDTO> getAllUsers() {
        List<User> users = userRepository.findAll();
        return userMapper.toDto(users);
    }

    public List<UserDTO> getAllByTeam(Long teamId) {
        List<User> users = userRepository.findAllByTeamId(teamId);
        return userMapper.toDto(users);
    }

    public TeamDTO joinTeamByInviteCode(InviteCodeDTO inviteCodeDTO) {
        Team team = teamService.getTeamByInviteCode(inviteCodeDTO.getInviteCode());

        User updatedUser = userRepository.findById(inviteCodeDTO.getUserId()).get();
        updatedUser.setTeam(team);
        return teamMapper.toDto(team);
    }
}
