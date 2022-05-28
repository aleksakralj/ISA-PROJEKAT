package stasaaleksadavid.isabackend.model;

import javax.persistence.*;

@Entity
@Table(name = "Cottage_Subscription", uniqueConstraints = {@UniqueConstraint(name ="UniqueUserAndCottage", columnNames = {"User_Id", "CottageId"})})
public class CottageSubscription {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "CottageId")
    private Long cottageId;

    @Column(name = "User_Id")
    private Long userId;

    public CottageSubscription(Long cottageId, Long userId) {
        super();
        this.cottageId = cottageId;
        this.userId = userId;
    }

    public CottageSubscription() {
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

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }
}
