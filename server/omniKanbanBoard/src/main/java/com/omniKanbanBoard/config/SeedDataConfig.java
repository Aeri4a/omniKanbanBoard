package com.omniKanbanBoard.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.omniKanbanBoard.models.Role;
import com.omniKanbanBoard.models.User;
import com.omniKanbanBoard.repositories.UserRepository;
import com.omniKanbanBoard.services.UserService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Component
@RequiredArgsConstructor
@Slf4j
public class SeedDataConfig implements CommandLineRunner {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final UserService userService;

    @Override
    public void run(String... args) throws Exception {

        if (userRepository.count() == 0) {

            User admin = User
                    .builder()
                    .username("admin")
                    .password(passwordEncoder.encode("admin"))
                    .role(Role.ROLE_ADMIN)
                    .build();

            userRepository.save(admin);
            log.debug("created 'admin' user - {}", admin);

            User user1 = User
                    .builder()
                    .username("user1")
                    .password(passwordEncoder.encode("user1"))
                    .role(Role.ROLE_USER)
                    .build();

            userRepository.save(user1);
            log.debug("created 'user1' user - {}", user1);

            User user2 = User
                    .builder()
                    .username("user2")
                    .password(passwordEncoder.encode("user2"))
                    .role(Role.ROLE_USER)
                    .build();

            userRepository.save(user2);
            log.debug("created 'user2' user - {}", user2);
        }
    }

}