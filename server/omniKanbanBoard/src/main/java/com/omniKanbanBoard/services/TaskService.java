package com.omniKanbanBoard.services;

import com.omniKanbanBoard.models.User;
import com.omniKanbanBoard.services.dto.TaskDTO;
import com.omniKanbanBoard.services.dto.UpdateTaskDTO;

import java.util.List;

public interface TaskService {

    List<TaskDTO> getAllByTeam(Long teamId);

    TaskDTO update(UpdateTaskDTO updateTaskDTO, Long teamId);

    TaskDTO create(TaskDTO taskDTO, User user);

    void delete(Long taskId);
}
