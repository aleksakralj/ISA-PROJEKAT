package stasaaleksadavid.isabackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import stasaaleksadavid.isabackend.model.ShipRatingCalculator;

@Repository
public interface ShipRatingCalculatorRepository extends JpaRepository<ShipRatingCalculator, Long> {

    @Query("select ShipRating from ShipRatingCalculator ShipRating where ShipRating.shipId = ?1 ")
    ShipRatingCalculator getShipRatingCalculatorByShipId(Long shipId);
}
