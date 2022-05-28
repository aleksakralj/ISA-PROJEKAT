package stasaaleksadavid.isabackend.model;

import javax.persistence.*;

@Entity
@Table(name = "user_rate_cottage")
public class UserRatesCottage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "User_Id")
    private Long userId;

    @Column(name = "Cottage_Id")
    private Long cottageId;

    @Column(name = "rating")
    private int rating;

    public UserRatesCottage() {}

    public UserRatesCottage(Long userId, Long cottageId, int rating) {
        super();
        this.userId = userId;
        this.cottageId = cottageId;
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

    public Long getCottageId() {
        return cottageId;
    }

    public void setACottageId(Long cottageId) {
        this.cottageId = cottageId;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }
}
