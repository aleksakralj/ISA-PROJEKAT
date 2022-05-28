package stasaaleksadavid.isabackend.model;

import javax.persistence.*;

@Entity
@Table(name = "user_rate_ship")
public class UserRateShip {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "User_Id")
    private Long userId;

    @Column(name = "Cottage_Id")
    private Long shipId;

    @Column(name = "rating")
    private int rating;

    public UserRateShip() {}

    public UserRateShip(Long userId, Long shipId, int rating) {
        super();
        this.userId = userId;
        this.shipId = shipId;
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

    public Long getShipId() {
        return shipId;
    }

    public void setShipId(Long shipId) {
        this.shipId = shipId;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }
}
