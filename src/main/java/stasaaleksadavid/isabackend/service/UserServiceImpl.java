package stasaaleksadavid.isabackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import stasaaleksadavid.isabackend.dto.UserRequest;
import stasaaleksadavid.isabackend.model.Role;
import stasaaleksadavid.isabackend.model.User;
import stasaaleksadavid.isabackend.repository.UserRepository;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;


    @Autowired
    private RoleService roleService;


    @Override
    public User findById(Long id) {
        return null;
    }

    @Override
    public User findByEmail(String email) {
        return null;
    }

    @Override
    public List<User> findAll() {
        return null;
    }

    @Override
    public User save(UserRequest userRequest) {
        User u = new User();
        u.setEmail(userRequest.getEmail());

        //ne hesiramo pass za sada
        u.setPassword(userRequest.getPassword());

        u.setFirstName(userRequest.getFirstname());
        u.setLastName(userRequest.getLastname());
        u.setEnabled(1);


        List<Role> roles = roleService.findByName("ROLE_CLIENT");
        u.setRoles(roles);

        return this.userRepository.save(u);
    }
}
