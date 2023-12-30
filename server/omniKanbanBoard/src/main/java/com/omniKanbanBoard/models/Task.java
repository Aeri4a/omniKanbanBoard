package com.omniKanbanBoard.models;

import jakarta.persistence.*;

@Entity
@Table(name = "tasks")
public class Task {
    enum Status {
        ASSIGNED,
        IN_PROGRESS,
        CODE_REVIEW,
        TESTING,
        DONE
    }

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private String description;

    @Column(name = "status")
    private Status status;

    @ManyToOne
    @JoinColumn(name = "team_id", referencedColumnName = "id")
    private Team team;

    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

//    public Task() {}
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
    public void setStatus(Status status) {
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
    public Status getStatus() {
        return this.status;
    }
    public Team getTeam() {
        return this.team;
    }
    public User getUser() {
        return this.user;
    }
}
