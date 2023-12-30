package com.omniKanbanBoard.services.mapper;

import com.omniKanbanBoard.models.User;
import com.omniKanbanBoard.services.dto.UserDTO;

import org.mapstruct.*;

@Mapper(componentModel = "spring", uses = {})
public interface UserMapper extends EntityMapper<UserDTO, User> {
    @BeanMapping(qualifiedByName = "DTO")
    UserDTO toDto(User user);
}