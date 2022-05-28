package stasaaleksadavid.isabackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import stasaaleksadavid.isabackend.model.ShipSubscription;

import java.util.List;

@Repository
public interface ShipSubscriptionRepository extends JpaRepository<ShipSubscription, Long> {
    List<ShipSubscription> findByShipId(Long shipId );

    @Query("select ShipSub from ShipSubscription ShipSub where ShipSub.userId=?1 and ShipSub.shipId=?2")
    ShipSubscription findByUserIdAndShipId(Long userId, Long shipId);
}

