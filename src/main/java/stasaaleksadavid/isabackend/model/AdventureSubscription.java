package stasaaleksadavid.isabackend.model;

import javax.persistence.*;

@Entity
@Table(name = "Adventure_Subscription", uniqueConstraints = {@UniqueConstraint(name ="UniqueUserAndAdventure", columnNames = {"User_Id", "AdventureId"})})
public class AdventureSubscription {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "AdventureId")
    private Long adventureId;

    @Column(name = "User_Id")
    private Long userId;


    public AdventureSubscription(Long adventureId, Long userId) {
        super();
        this.adventureId = adventureId;
        this.userId = userId;
    }

    public AdventureSubscription() {
    }

    public Long getAdventureId() {
        return adventureId;
    }

    public void setAdventureId(Long adventureId) {
        this.adventureId = adventureId;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }
}
