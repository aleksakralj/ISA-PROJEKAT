package stasaaleksadavid.isabackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import stasaaleksadavid.isabackend.repository.RoleRepository;

import stasaaleksadavid.isabackend.model.Role;
import java.util.List;

@Service
public class RoleServiceImpl implements RoleService{
    @Autowired
    private RoleRepository roleRepository;


    @Override
    public Role findById(Long id) {
        return null;
    }

    @Override
    public List<stasaaleksadavid.isabackend.model.Role> findByName(String name) {
        List<Role> roles = this.roleRepository.findByName(name);
        return roles;
    }
}
