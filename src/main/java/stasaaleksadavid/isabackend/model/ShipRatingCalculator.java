package stasaaleksadavid.isabackend.model;

import javax.persistence.*;

@Entity
@Table(name = "ship_rating")
public class ShipRatingCalculator {

    @javax.persistence.Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "Ship_Id")
    private Long shipId;

    @Column(name = "Final_Rating")
    private double finalRating;

    @Column(name = "Rating_Sum")
    private int ratingSum;

    @Column(name = "Rating_Count")
    private int ratingCount;

    public ShipRatingCalculator() {}

    public ShipRatingCalculator(Long shipId, double finalRating, int ratingSum, int ratingCount) {
        this.shipId = shipId;
        this.finalRating = finalRating;
        this.ratingSum = ratingSum;
        this.ratingCount = ratingCount;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getShipId() {
        return shipId;
    }

    public Long getShipIdId() {
        return shipId;
    }

    public void setShipIdId(Long shipId) {
        this.shipId = shipId;
    }

    public double getFinalRating() {
        return finalRating;
    }

    public void setFinalRating(double finalRating) {
        this.finalRating = finalRating;
    }

    public int getRatingSum() {
        return ratingSum;
    }

    public void setRatingSum(int ratingSum) {
        this.ratingSum = ratingSum;
    }

    public int getRatingCount() {
        return ratingCount;
    }

    public void setRatingCount(int ratingCount) {
        this.ratingCount = ratingCount;
    }
}
