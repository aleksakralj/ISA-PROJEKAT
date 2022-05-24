package stasaaleksadavid.isabackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import stasaaleksadavid.isabackend.model.ClientPenalties;

import java.util.List;

@Repository
public interface ClientPenaltiesRepository extends JpaRepository<ClientPenalties,Long> {
    List<ClientPenalties> getClientPenaltiesByUserId(Long userId);
}
