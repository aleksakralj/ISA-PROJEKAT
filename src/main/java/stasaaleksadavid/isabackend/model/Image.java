package stasaaleksadavid.isabackend.model;

import javax.persistence.*;
import java.sql.Clob;

@Entity
@Table(name = "Images")
public class Image {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "Type")
    private String type;

    @Column(name = "ID_Of_Type")
    private long idOfType;

    @Column(name = "Image64")
    private String image64;

    public Image() {
    }

    public Image(String type, long idOfType, String image64) {
        super();
        this.type = type;
        this.idOfType = idOfType;
        this.image64 = image64;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public long getIdOfType() {
        return idOfType;
    }

    public void setIdOfType(long idOfType) {
        this.idOfType = idOfType;
    }

    public String getImage64() {
        return image64;
    }

    public void setImage64(String image64) {
        this.image64 = image64;
    }
}

