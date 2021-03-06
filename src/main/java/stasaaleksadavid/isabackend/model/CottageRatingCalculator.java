package stasaaleksadavid.isabackend.model;

import javax.persistence.*;

@Entity
@Table(name = "cottage_rating")
public class CottageRatingCalculator {

    @javax.persistence.Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "Cottage_Id")
    private Long cottageId;

    @Column(name = "Final_Rating")
    private double finalRating;

    @Column(name = "Rating_Sum")
    private int ratingSum;

    @Column(name = "Rating_Count")
    private int ratingCount;

    public CottageRatingCalculator() {}

    public CottageRatingCalculator(Long cottageId,double finalRating, int ratingSum, int ratingCount) {
        this.cottageId = cottageId;
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

    public Long getCottageId() {
        return cottageId;
    }

    public void setCottageId(Long cottageId) {
        this.cottageId = cottageId;
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
