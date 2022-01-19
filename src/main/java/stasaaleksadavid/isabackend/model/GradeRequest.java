package stasaaleksadavid.isabackend.model;

import javax.persistence.*;

@Entity
@Table(name = "GradeRequests")
public class GradeRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "Grade")
    private String grade;

    @Column(name = "Type")
    private String type;

    @Column(name = "TypeId")
    private long typeId;


    @Column(name = "Message")
    private String message;

    public GradeRequest() {
    }

    public GradeRequest(String grade, String type, long typeId, String message) {
        super();
        this.grade = grade;
        this.type = type;
        this.typeId = typeId;
        this.message = message;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public long getTypeId() {
        return typeId;
    }

    public void setTypeId(long typeId) {
        this.typeId = typeId;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
