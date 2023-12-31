package com.omniKanbanBoard.services.impl;

import com.omniKanbanBoard.utils.TaskStatus;
import com.omniKanbanBoard.models.Task;
import com.omniKanbanBoard.models.User;
import com.omniKanbanBoard.repositories.TaskRepository;
import com.omniKanbanBoard.repositories.UserRepository;
import com.omniKanbanBoard.services.TaskService;
import com.omniKanbanBoard.services.dto.TaskDTO;
import com.omniKanbanBoard.services.mapper.TaskMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class TaskServiceImpl implements TaskService {

    private final TaskRepository taskRepository;
    private final TaskMapper taskMapper;
    private final UserRepository userRepository;

    public TaskServiceImpl(
            TaskRepository taskRepository,
            TaskMapper taskMapper,
            UserRepository userRepository
    ) {
        this.taskRepository = taskRepository;
        this.taskMapper = taskMapper;
        this.userRepository = userRepository;
    }

    public List<TaskDTO> getAllByTeam(Long teamId) {
        List<Task> tasks = taskRepository.findAllByTeamId(teamId);
        return taskMapper.toDto(tasks); // maper is broken
    }

    public TaskDTO create(TaskDTO taskDTO, Long userId) {
        Task saveTask = new Task();
        saveTask.setTitle(taskDTO.getTitle());
        saveTask.setDescription(taskDTO.getDescription());
        saveTask.setStatus(TaskStatus.ASSIGNED);
        User assignedUser = userRepository.findById(userId).get();
        saveTask.setUser(assignedUser);
        saveTask.setTeam(assignedUser.getTeam());
        Task newTask = taskRepository.save(saveTask);

        return taskMapper.toDto(newTask);
    }
}
