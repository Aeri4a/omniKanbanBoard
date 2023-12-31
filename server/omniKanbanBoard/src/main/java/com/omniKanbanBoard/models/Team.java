package com.omniKanbanBoard.models;

import jakarta.persistence.*;

@Entity
@Table(name = "teams")
public class Team {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "invite_code")
    private String inviteCode;

    @OneToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "owner_id", referencedColumnName = "id")
    private User owner;

//    public Team() {}
//    public Team(
//            Long id,
//            String name,
//            String inviteCode,
//            User owner
//    ) {
//        this.id = id;
//        this.name = name;
//        this.inviteCode = inviteCode;
//        this.owner = owner;
//    }

    public void setId(long id){
        this.id = id;
    }
    public void setName(String name){
        this.name = name;
    }
    public void setInviteCode(String inviteCode){
        this.inviteCode = inviteCode;
    }
    public void setOwner(User owner){
        this.owner = owner;
    }

    public Long getId(){
        return this.id;
    }
    public String getName(){
        return this.name;
    }
    public String getInviteCode(){
        return this.inviteCode;
    }
    public User getOwner(){
        return this.owner;
    }
}
