package stasaaleksadavid.isabackend.model;

import javax.persistence.*;

@Entity
@Table(name = "client_points")
public class ClientPoints {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "user_id")
    private long userId;

    @Column(name = "points")
    private double points;

    public ClientPoints() {}

    public ClientPoints(long userId, double points) {
        super();
        this.userId = userId;
        this.points = points;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public double getPoints() {
        return points;
    }

    public void setPoints(double points) {
        this.points = points;
    }
}
