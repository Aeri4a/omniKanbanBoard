package com.omniKanbanBoard.controllers;

import com.omniKanbanBoard.errors.BadRequestInfoException;
import com.omniKanbanBoard.models.User;
import com.omniKanbanBoard.services.TaskService;
import com.omniKanbanBoard.services.UserService;
import com.omniKanbanBoard.services.dto.TaskDTO;
import com.omniKanbanBoard.services.dto.UpdateTaskDTO;
import jakarta.validation.constraints.NotNull;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("/api/task")
public class TaskController {

    private final TaskService taskService;

    private final UserService userService;

    public TaskController(
            TaskService taskService,
            UserService userService
    ) {
        this.taskService = taskService;
        this.userService = userService;
    }


    @GetMapping("/allByTeam")
    public ResponseEntity<List<TaskDTO>> getAllInTeam() {
        User requester = userService.getCurrentUser();
        List<TaskDTO> tasks = taskService.getAllByTeam(requester.getTeam().getId());
        return ResponseEntity.ok().body(tasks);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<TaskDTO> update(
            @RequestBody UpdateTaskDTO updateTaskDTO,
            @PathVariable Long id
    ) {
        if (updateTaskDTO.getId() == null || !Objects.equals(updateTaskDTO.getId(), id)) {
            throw new BadRequestInfoException("Not provided id", "idNotExist");
        }
        User requester = userService.getCurrentUser();

        TaskDTO updatedTask = taskService.update(updateTaskDTO, requester.getTeam().getId());
        return ResponseEntity.ok().body(updatedTask);
    }

    @PostMapping
    public ResponseEntity<TaskDTO> create(
            @NotNull @RequestBody UpdateTaskDTO updateTaskDTO
    ) {
        if (updateTaskDTO.getId() != null) {
            throw new BadRequestInfoException("New task cannot have id", "idExists");
        }
        User requester = userService.getCurrentUser();

        TaskDTO newTask = taskService.create(updateTaskDTO);
        return ResponseEntity.ok().body(newTask);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        taskService.delete(id);
        return ResponseEntity.ok().body("OK");
    }
}
