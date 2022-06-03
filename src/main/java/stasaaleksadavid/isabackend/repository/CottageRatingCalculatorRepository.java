package stasaaleksadavid.isabackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import stasaaleksadavid.isabackend.model.CottageRatingCalculator;

@Repository
public interface CottageRatingCalculatorRepository extends JpaRepository<CottageRatingCalculator, Long> {

    @Query("select CottageRating " +
            "from CottageRatingCalculator CottageRating " +
            "where CottageRating.cottageId = ?1")
    CottageRatingCalculator getCottageRatingCalculatorByCottageId(Long cottageId);
}
