package stasaaleksadavid.isabackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import stasaaleksadavid.isabackend.model.CottageRatingCalculator;

@Repository
public interface CottageRatingCalculatorRepository extends JpaRepository<CottageRatingCalculator, Long> {
}
