package stasaaleksadavid.isabackend.model;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;

@Entity
@Table(name = "")
public class Adventure {

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
    private int maxPeople;


    @Column(name = "")
    private String rulesOfConduct;


    @Column(name = "")
    private String termsOfReservation;

    @Column(name = "")
    private long instructorId;

    public  Adventure() {}

    public Adventure(String name, String address, String description/*, String instructorBiography*/, int maxPeople, ArrayList<LocalDate> freeTerms, String rulesOfConduct, ArrayList<String> additionalEquipment/* String pricelist*/, String termsOfReservation) {

        this.name = name;
        this.address = address;
        this.description = description;
        this.maxPeople = maxPeople;
        this.rulesOfConduct = rulesOfConduct;
        this.termsOfReservation = termsOfReservation;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getMaxPeople() {
        return maxPeople;
    }

    public void setMaxPeople(int maxPeople) {
        this.maxPeople = maxPeople;
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
