package com.omniKanbanBoard.services;

import com.omniKanbanBoard.models.User;
import com.omniKanbanBoard.services.dto.UserDTO;

import java.util.List;

public interface UserService {
    List<UserDTO> getAllUsers();
}
