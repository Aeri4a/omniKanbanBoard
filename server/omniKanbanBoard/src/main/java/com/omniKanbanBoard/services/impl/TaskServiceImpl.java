package com.omniKanbanBoard.services.impl;

import com.omniKanbanBoard.models.Team;
import com.omniKanbanBoard.services.dto.UpdateTaskDTO;
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
        return taskMapper.toDto(tasks);
    }

    public TaskDTO update(UpdateTaskDTO updateTaskDTO, Long teamId) {
        Task taskToUpdate = new Task();
        taskToUpdate.setId(updateTaskDTO.getId());
        taskToUpdate.setTitle(updateTaskDTO.getTitle());
        taskToUpdate.setDescription(updateTaskDTO.getDescription());
        taskToUpdate.setStatus(updateTaskDTO.getStatus());

        User newUser = new User();
        newUser.setId(updateTaskDTO.getUserId());
        taskToUpdate.setUser(newUser);

        Team currentTeam = new Team();
        currentTeam.setId(teamId);
        taskToUpdate.setTeam(currentTeam);

        Task updatedTask = taskRepository.save(taskToUpdate);
        return taskMapper.toDto(updatedTask);
    }

    public TaskDTO create(TaskDTO taskDTO, User user) {
        Task saveTask = new Task();
        saveTask.setTitle(taskDTO.getTitle());
        saveTask.setDescription(taskDTO.getDescription());
        saveTask.setStatus(TaskStatus.ASSIGNED);
        saveTask.setUser(user);
        saveTask.setTeam(user.getTeam());
        Task newTask = taskRepository.save(saveTask);

        return taskMapper.toDto(newTask);
    }

    public void delete(Long taskId) {
        taskRepository.deleteById(taskId);
    }
}
