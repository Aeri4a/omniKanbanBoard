package com.omniKanbanBoard.services.mapper;

import com.omniKanbanBoard.models.Task;
import com.omniKanbanBoard.services.dto.TaskDTO;
import org.mapstruct.*;

@Mapper(componentModel = "spring", uses = {})
public interface TaskMapper extends EntityMapper<TaskDTO, Task> {
    @BeanMapping(qualifiedByName = "DTO")
    TaskDTO toDto(Task task);
}
