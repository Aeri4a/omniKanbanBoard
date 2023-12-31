package com.omniKanbanBoard.models;

import jakarta.persistence.*;
import com.omniKanbanBoard.utils.TaskStatus;

import java.io.Serializable;

@Entity
@Table(name = "tasks")
public class Task implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "description", length = 512)
    private String description;

    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private TaskStatus status;

    @ManyToOne
    @JoinColumn(name = "team_id", referencedColumnName = "id")
    private Team team;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    public Task() {}
//    public Task(
//            Long id,
//            String title,
//            String description,
//            Status status,
//            Team team,
//            User user
//    ){
//        this.id = id;
//        this.title = title;
//        this.description = description;
//        this.status = status;
//        this.team = team;
//        this.user = user;
//    }

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
    public void setTeam(Team team) {
        this.team = team;
    }
    public void setUser(User user) {
        this.user = user;
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
    public Team getTeam() {
        return this.team;
    }
    public User getUser() {
        return this.user;
    }
}
