package stasaaleksadavid.isabackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import stasaaleksadavid.isabackend.model.UserRateShip;

@Repository
public interface UserRateShipRepository extends JpaRepository<UserRateShip, Long> {
}
