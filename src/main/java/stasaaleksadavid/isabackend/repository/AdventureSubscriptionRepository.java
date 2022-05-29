package stasaaleksadavid.isabackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import stasaaleksadavid.isabackend.model.AdventureSubscription;

import java.util.List;

@Repository
public interface AdventureSubscriptionRepository extends JpaRepository<AdventureSubscription, Long> {
    List<AdventureSubscription> findByAdventureId(Long adventureId );

    @Query ("select AdvSub from AdventureSubscription AdvSub where AdvSub.userId=?1 and AdvSub.adventureId=?2")
    AdventureSubscription findByUserIdAndAdventureId(Long userId, Long adventureId);

    @Query("select AdvSub from AdventureSubscription AdvSub where AdvSub.userId=?1")
    List<AdventureSubscription> findAllByUserId(Long userId);

}
