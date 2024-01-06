package com.omniKanbanBoard.controllers;

import com.omniKanbanBoard.models.User;
import com.omniKanbanBoard.services.UserService;
import com.omniKanbanBoard.services.dto.InviteCodeDTO;
import com.omniKanbanBoard.services.dto.TeamDTO;
import com.omniKanbanBoard.services.dto.UserDTO;
import jakarta.validation.constraints.NotNull;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/user")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<UserDTO>> getAll() {
        List<UserDTO> users = userService.getAllUsers();
        if (users.isEmpty())
            return ResponseEntity.notFound().build();
        return ResponseEntity.ok().body(users);
    }

    @GetMapping("/allByTeam")
    public ResponseEntity<List<UserDTO>> getAllInTeam() {
        User requester = userService.getCurrentUser();
        List<UserDTO> users = userService.getAllByTeam(requester.getTeam().getId());
        if (users.isEmpty())
            return ResponseEntity.notFound().build();
        return ResponseEntity.ok().body(users);
    }

    @PostMapping("/joinTeam")
    public ResponseEntity<TeamDTO> joinTeam(@NotNull @RequestBody InviteCodeDTO inviteCodeDTO) {
        String inviteCode = inviteCodeDTO.getInviteCode();
        User requester = userService.getCurrentUser();

        TeamDTO teamJoined = userService.joinTeamByInviteCode(inviteCode, requester);
        return ResponseEntity.ok().body(teamJoined);
    }

    @GetMapping("/leaveTeam")
    public ResponseEntity<String> leaveTeam() {
        User requester = userService.getCurrentUser();
        userService.leaveCurrentTeam(requester);
        return ResponseEntity.ok().body("Leaved team");
    }
}
