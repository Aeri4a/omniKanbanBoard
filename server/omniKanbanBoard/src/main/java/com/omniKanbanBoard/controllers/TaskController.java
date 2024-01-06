package com.omniKanbanBoard.controllers;

import com.omniKanbanBoard.errors.BadRequestInfoException;
import com.omniKanbanBoard.services.TaskService;
import com.omniKanbanBoard.services.dto.TaskDTO;
import jakarta.validation.constraints.NotNull;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/task")
public class TaskController {

    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }


    @GetMapping("/allByTeam/{teamId}")
    public ResponseEntity<List<TaskDTO>> getAllInTeam(@PathVariable Long teamId) {
        List<TaskDTO> tasks = taskService.getAllByTeam(teamId);
        return ResponseEntity.ok().body(tasks);
    }

    // change it to get userId from token request
    @PostMapping("/create/{userId}")
    public ResponseEntity<TaskDTO> create(
            @NotNull @RequestBody TaskDTO taskDTO,
            @PathVariable Long userId
    ) {
        if (taskDTO.getId() != null) {
            throw new BadRequestInfoException("New task cannot have id", "idExists");
        }

        TaskDTO newTask = taskService.create(taskDTO, userId);
        return ResponseEntity.ok().body(newTask);
    }
}
