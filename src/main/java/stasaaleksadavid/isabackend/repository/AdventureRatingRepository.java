package stasaaleksadavid.isabackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import stasaaleksadavid.isabackend.model.AdventureRating;

@Repository
public interface AdventureRatingRepository extends JpaRepository<AdventureRating, Long> {


}
