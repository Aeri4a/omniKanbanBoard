package com.omniKanbanBoard.controllers;

import com.omniKanbanBoard.models.User;
import com.omniKanbanBoard.services.UserService;
import com.omniKanbanBoard.services.dto.InviteCodeDTO;
import com.omniKanbanBoard.services.dto.TeamDTO;
import com.omniKanbanBoard.services.dto.UserDTO;
import jakarta.validation.constraints.NotNull;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
        return ResponseEntity.ok().body(users);
    }

    @GetMapping("/allByTeam/{teamId}")
    public ResponseEntity<List<UserDTO>> getAllInTeam(@PathVariable Long teamId) {
        List<UserDTO> users = userService.getAllByTeam(teamId);
        if (users.isEmpty())
            return ResponseEntity.notFound().build();
        return ResponseEntity.ok().body(users);
    }


//    @GetMapping("/login")
//    public ResponseEntity<String> login() {
//    }
//
//    @GetMapping("/auth")
//    public ResponseEntity<UserDTO> authenticate() {
//    }
//
//    @GetMapping("/{id}")
//    public ResponseEntity<UserDTO> getSingle() {
//
//    }

    // Sooner for filtering users
    //@GetMapping("/team")


    @PostMapping("/joinTeam")
    public ResponseEntity<TeamDTO> joinTeam(@NotNull @RequestBody InviteCodeDTO inviteCodeDTO) {
        TeamDTO teamJoined = userService.joinTeamByInviteCode(inviteCodeDTO);
        return ResponseEntity.ok().body(teamJoined);
    }

    @GetMapping("/leaveTeam")
    public ResponseEntity<String> leaveTeam() {
        userService.leaveCurrentTeam();
        return ResponseEntity.ok().body("Leaved team");
    }
}
