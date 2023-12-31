package com.omniKanbanBoard.services.dto;

import com.omniKanbanBoard.utils.TaskStatus;
import com.omniKanbanBoard.models.User;

public class TaskDTO {

    private Long id;

    private String title;

    private String description;

    private TaskStatus status;

    private UserDTO user;

    public TaskDTO() {}

    public TaskDTO(
            Long id,
            String title,
            String description,
            TaskStatus status,
            User user
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
        UserDTO userDTO = new UserDTO(user);
        this.user = userDTO;
    }

    public void setId(Long id) {
        this.id = id;
    }
    public void setTitle(String title) {
        this.title = title;
    }

    public void setDescription(String description) {
        this.description = description;
    }
    public void setStatus(TaskStatus status) {
        this.status = status;
    }

    public void setUser(User user) {
        UserDTO userDTO = new UserDTO(user);
        this.user = userDTO;
    }

    public Long getId() {
        return this.id;
    }
    public String getTitle() {
        return this.title;
    }
    public String getDescription() {
        return this.description;
    }
    public TaskStatus getStatus() {
        return this.status;
    }

    public UserDTO getUser() {
        return this.user;
    }
}
