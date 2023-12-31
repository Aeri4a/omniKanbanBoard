package com.omniKanbanBoard.repositories;

import com.omniKanbanBoard.models.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long>, JpaSpecificationExecutor<Task> {

    List<Task> findAllByTeamId(Long teamId);

}
