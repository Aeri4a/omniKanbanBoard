package com.omniKanbanBoard.services.dto;

import com.omniKanbanBoard.utils.TaskStatus;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
public class UpdateTaskDTO {

    @Getter @Setter
    private Long id;

    @Getter @Setter
    private String title;

    @Getter @Setter
    private String description;

    @Getter @Setter
    private TaskStatus status;

    @Getter @Setter
    private Long userId;
}
