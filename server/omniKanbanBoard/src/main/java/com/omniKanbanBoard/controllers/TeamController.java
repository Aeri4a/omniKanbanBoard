package com.omniKanbanBoard.controllers;

import com.omniKanbanBoard.errors.BadRequestInfoException;
import com.omniKanbanBoard.models.User;
import com.omniKanbanBoard.services.TeamService;
import com.omniKanbanBoard.services.UserService;
import com.omniKanbanBoard.services.dto.TeamDTO;

import jakarta.validation.constraints.NotNull;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/api/team")
public class TeamController {

    private final TeamService teamService;

    private final UserService userService;

    public TeamController(
            TeamService teamService,
            UserService userService
    ) {
        this.teamService = teamService;
        this.userService = userService;
    }

    @PostMapping
    public ResponseEntity<TeamDTO> create(@NotNull @RequestBody TeamDTO teamDTO) {
        if (teamDTO.getId() != null) {
            throw new BadRequestInfoException("New team cannot have id", "idExists");
        }
        if (teamDTO.getOwnerId() != null) {
            throw new BadRequestInfoException("New team cannot have ownerId", "ownerIdExist");
        }
        if (teamDTO.getName() == null) {
            throw new BadRequestInfoException("Not provided name", "nameNotExist");
        }

        User requester = userService.getCurrentUser();

        TeamDTO createdTeam = teamService.create(teamDTO, requester);

        return ResponseEntity.ok().body(createdTeam);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        teamService.delete(id);
        return ResponseEntity.ok().body("OK");
    }
}
