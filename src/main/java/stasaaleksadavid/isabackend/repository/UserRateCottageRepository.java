package stasaaleksadavid.isabackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import stasaaleksadavid.isabackend.model.UserRatesCottage;

@Repository
public interface UserRateCottageRepository  extends JpaRepository<UserRatesCottage, Long> {
}
