package stasaaleksadavid.isabackend.model;

import javax.persistence.*;

@Entity
@Table(name="ProfileDeletionRequests")
public class ProfileDelitionRequest {

    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "Reason")
    private String reason;

    @Column(name = "User_Id")
    private long userId;

    @Column(name = "User_Type")
    private String userType;

    public ProfileDelitionRequest(){}

    public ProfileDelitionRequest(String reason, long userId,String userType) {
        super();
        this.reason = reason;
        this.userId = userId;
        this.userType = userType;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public String getUserType() {
        return userType;
    }

    public void setUserType(String userType) {
        this.userType = userType;
    }
}
