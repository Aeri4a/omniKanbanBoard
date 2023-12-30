package com.omniKanbanBoard.services.mapper;

import com.omniKanbanBoard.models.Team;
import com.omniKanbanBoard.services.dto.TeamDTO;
import org.mapstruct.*;

@Mapper(componentModel = "spring", uses = {})
public interface TeamMapper extends EntityMapper<TeamDTO, Team> {
    @BeanMapping(qualifiedByName = "DTO")
    TeamDTO toDto(Team team);
}
