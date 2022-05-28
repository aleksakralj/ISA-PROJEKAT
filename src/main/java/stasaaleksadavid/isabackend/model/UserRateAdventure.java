package stasaaleksadavid.isabackend.model;

import javax.persistence.*;

@Entity
@Table(name = "user_rate_adventure")
public class UserRateAdventure {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "User_Id")
    private Long userId;

    @Column(name = "Adventure_Id")
    private Long adventureId;

    @Column(name = "rating")
    private int rating;

    public UserRateAdventure() {}

    public UserRateAdventure(Long userId, Long adventureId, int rating) {
        super();
        this.userId = userId;
        this.adventureId = adventureId;
        this.rating = rating;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getAdventureId() {
        return adventureId;
    }

    public void setAdventureId(Long adventureId) {
        this.adventureId = adventureId;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }
}
