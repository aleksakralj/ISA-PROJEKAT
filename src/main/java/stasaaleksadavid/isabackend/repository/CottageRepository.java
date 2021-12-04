package stasaaleksadavid.isabackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import stasaaleksadavid.isabackend.model.Cottage;
import stasaaleksadavid.isabackend.model.CottageOwner;

import java.util.List;

@Repository
public interface CottageRepository extends JpaRepository<Cottage, Long> {
    List<CottageOwner> findByOwnerId(Long ownerId );
}
