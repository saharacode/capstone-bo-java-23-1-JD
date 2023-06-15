package de.neuefische.backend.service;

import de.neuefische.backend.model.MongoUser;
import de.neuefische.backend.repository.MongoUserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MongoUserService implements UserDetailsService {
    private final MongoUserRepo mongoUserRepo;
    private final GenerateUUIDService generateUUIDService;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        MongoUser mongoUser = mongoUserRepo.findMongoUserByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("The user '" + username + "' could not be found."));
        return new User(mongoUser.getUsername(), mongoUser.getPassword(), List.of());
    }

    public MongoUser registerUser(MongoUser newUserWithoutId) {
        MongoUser newUser = new MongoUser(generateUUIDService.generateUUID(),newUserWithoutId.getUsername(), newUserWithoutId.getPassword(), newUserWithoutId.getFullname(), newUserWithoutId.getEmail(), newUserWithoutId.getHomecity());

        return mongoUserRepo.save(newUser);
    }
}
