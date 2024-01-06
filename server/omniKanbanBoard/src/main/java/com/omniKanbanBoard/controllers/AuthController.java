package com.omniKanbanBoard.controllers;

import com.omniKanbanBoard.services.AuthService;
import com.omniKanbanBoard.services.dto.AuthRequest;
import com.omniKanbanBoard.services.dto.JwtAuthResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/login")
    public JwtAuthResponse login(@RequestBody AuthRequest request) {
        return authService.login(request);
    }
}
