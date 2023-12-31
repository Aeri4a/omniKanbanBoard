package com.omniKanbanBoard.controllers;

import com.omniKanbanBoard.errors.BadRequestInfoException;
import com.omniKanbanBoard.services.TeamService;
import com.omniKanbanBoard.services.dto.TeamDTO;

import jakarta.validation.constraints.NotNull;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/api/team")
public class TeamController {

    private final TeamService teamService;

    public TeamController(
            TeamService teamService
    ) {
        this.teamService = teamService;
    }

    @PostMapping("/create")
    public ResponseEntity<TeamDTO> create(@NotNull @RequestBody TeamDTO teamDTO) {
        if (teamDTO.getId() != null) {
            throw new BadRequestInfoException("Team cannot have id", "idExists");
        }
        if (teamDTO.getOwnerId() == null) {
            throw new BadRequestInfoException("Not provided creator id", "creatorIdNotExist");
        }
        if (teamDTO.getName() == null) {
            throw new BadRequestInfoException("Not provided name", "nameNotExist");
        }

        TeamDTO createdTeam = teamService.create(teamDTO);

        return ResponseEntity.ok().body(createdTeam);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        teamService.delete(id);
        return ResponseEntity.ok().body("OK");
    }
}
