package com.omniKanbanBoard.controllers;

import com.omniKanbanBoard.models.User;
import com.omniKanbanBoard.services.UserService;
import com.omniKanbanBoard.services.dto.UserDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/user")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<UserDTO>> getAll() {
        List<UserDTO> users = userService.getAllUsers();
        return ResponseEntity.ok().body(users);
    }

//    @GetMapping("/login")
//    public ResponseEntity<String> login() {
//    }
//
//    @GetMapping("/auth")
//    public ResponseEntity<UserDTO> authenticate() {
//    }
//
//    @GetMapping("/{id}")
//    public ResponseEntity<UserDTO> getSingle() {
//
//    }

    // Sooner for filtering users
    //@GetMapping("/team")


    @PostMapping("/joinTeam")
    public ResponseEntity joinTeam() {
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
