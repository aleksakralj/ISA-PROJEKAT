package stasaaleksadavid.isabackend.service;

import stasaaleksadavid.isabackend.dto.UserRequest;
import stasaaleksadavid.isabackend.model.User;

import java.util.List;

public interface UserService {
    User findById(Long id);
    User findByEmail(String email);
    List<User> findAll ();
    User save(UserRequest userRequest);
}
