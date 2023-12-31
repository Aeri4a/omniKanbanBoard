package com.omniKanbanBoard.services;

import com.omniKanbanBoard.services.dto.TaskDTO;
import java.util.List;

public interface TaskService {

    List<TaskDTO> getAllByTeam(Long teamId);
    TaskDTO create(TaskDTO taskDTO, Long userId);
}
