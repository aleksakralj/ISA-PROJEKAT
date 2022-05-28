package stasaaleksadavid.isabackend.model;

import javax.persistence.*;

@Entity
@Table(name = "adventure_rating")
public class AdventureRating {

    @javax.persistence.Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long adventureId;

    @Column(name = "Final_Rating")
    private double finalRating;

    @Column(name = "Rating_Sum")
    private int ratingSum;

    @Column(name = "Rating_Count")
    private int ratingCount;

    public AdventureRating() {}

    public AdventureRating(double finalRating, int ratingSum, int ratingCount) {
        this.finalRating = finalRating;
        this.ratingSum = ratingSum;
        this.ratingCount = ratingCount;
    }

    public Long getAdventureId() {
        return adventureId;
    }

    public void setAdventureId(Long adventureId) {
        this.adventureId = adventureId;
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
