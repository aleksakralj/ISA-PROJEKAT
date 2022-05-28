package stasaaleksadavid.isabackend.model;

import javax.persistence.*;

@Entity
@Table(name = "Ship_Subscription", uniqueConstraints = {@UniqueConstraint(name = "UniqueUserAndShip", columnNames = {"User_Id", "ShipId"})})
public class ShipSubscription {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "ShipId")
    private Long shipId;

    @Column(name = "User_Id")
    private Long userId;

    public ShipSubscription(Long shipId,Long userId) {
        super();
        this.shipId = shipId;
        this.userId = userId;
    }

    public ShipSubscription() {
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

    public void setShipId(Long shipId) {
        this.shipId = shipId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }
}
