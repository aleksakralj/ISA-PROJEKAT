package stasaaleksadavid.isabackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import stasaaleksadavid.isabackend.model.Role;


public interface RoleRepository extends JpaRepository<Role, Long> {
    List<Role> findByName(String name);
}
