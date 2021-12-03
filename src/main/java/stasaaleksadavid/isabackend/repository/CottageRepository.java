package stasaaleksadavid.isabackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import stasaaleksadavid.isabackend.model.Cottage;

@Repository
public interface CottageRepository extends JpaRepository<Cottage, Long> {
}
