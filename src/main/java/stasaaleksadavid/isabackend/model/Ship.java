package stasaaleksadavid.isabackend.model;

import javax.persistence.*;

@Entity
@Table(name = "Ships")
public class Ship {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "")
    private long ownerId;

    @Column(name = "")
    private String name;

    @Column(name = "")
    private String addres;

    @Column(name = "")
    private String description;

    @Column(name = "")
    private double rating;

    @Column(name = "")
    private String rulesOfConduct;

    @Column(name = "")
    private String termsOfReservation;

    public Ship() {}

    public Ship(long id,long ownerId ,String name,/* String type, int lenght, int numberOfEngines, int enginePower, int maxSpeed, int capacity,*/ String addres, String description, double rating,/* ArrayList<LocalDate> freeTerms, ArrayList<String> pricelist, ArrayList<String> additionalServices, */String rulesOfConduct, String termsOfReservation) {
        this.id = id;
        this.ownerId= ownerId;
        this.name = name;
        this.addres = addres;
        this.description = description;
        this.rating = rating;
        this.rulesOfConduct = rulesOfConduct;
        this.termsOfReservation = termsOfReservation;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddres() {
        return addres;
    }

    public void setAddres(String addres) {
        this.addres = addres;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public long getOwnerId() {
        return ownerId;
    }

    public void setOwnerId(long ownerId) {
        this.ownerId = ownerId;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getRulesOfConduct() {
        return rulesOfConduct;
    }

    public void setRulesOfConduct(String rulesOfConduct) {
        this.rulesOfConduct = rulesOfConduct;
    }

    public String getTermsOfReservation() {
        return termsOfReservation;
    }

    public void setTermsOfReservation(String termsOfReservation) {
        this.termsOfReservation = termsOfReservation;
    }
}
