package com.omniKanbanBoard.controllers;

import com.omniKanbanBoard.services.AuthService;
import com.omniKanbanBoard.services.dto.AuthRequest;
import com.omniKanbanBoard.services.dto.JwtAuthResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<?> login(@RequestBody AuthRequest request) {
        JwtAuthResponse jwt = authService.login(request);
        return ResponseEntity.ok(jwt);
//            return new ResponseEntity<>("Bad credentials", HttpStatus.FORBIDDEN);
    }
}
