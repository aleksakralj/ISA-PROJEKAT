package stasaaleksadavid.isabackend.model;
import javax.persistence.*;
import java.util.ArrayList;

@Entity
@Table(name = "Cottages")
public class Cottage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "")
    private String name;

    @Column(name = "")
    private String address;

    @Column(name = "")
    private String description;

    @Column(name = "")
    private double rating;

    @Column(name = "")
    private int numberOfRooms;

    @Column(name = "")
    private String rulesOfConduct;

    //TO DO
    @Column(name = "")
    private String priceList;


    public Cottage() {}

    public Cottage(String name, String address, String description, double rating, int numberOfRooms, String rulesOfConduct, String priceList) {
        this.name = name;
        this.address = address;
        this.description = description;
        this.rating = rating;
        this.numberOfRooms = numberOfRooms;
        this.rulesOfConduct = rulesOfConduct;
        this.priceList = priceList;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress () {
        return address;
    }

    public void setAddress (String address) {
        this.address = address;
    }

    public String getDescription(){
        return description;
    }

    public void setDescription (String description) {
        this.description =description;
    }

    public double getRating() {
        return rating;
    }

    public void setRating (double rating) {
        this.rating = rating;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getId() {
        return id;
    }

    public int getNumberOfRooms() {
        return numberOfRooms;
    }

    public void setNumberOfRooms(int numberOfRooms) {
        this.numberOfRooms = numberOfRooms;
    }


}
