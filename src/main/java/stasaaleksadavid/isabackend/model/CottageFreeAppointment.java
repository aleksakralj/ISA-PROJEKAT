package stasaaleksadavid.isabackend.model;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "Cottage_Free_Appointments")
public class CottageFreeAppointment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "Cottage_ID")
    private long cottageId;

    @Column(name = "Starting_Date")
    private LocalDateTime startingDate;

    @Column(name = "Ending_Date")
    private LocalDateTime endingDate;

    @Column(name = "Numer_Of_People")
    private int numberOfPeople ;

    @Column(name = "Additional_Services")
    private String additionalServices;

    @Column(name = "Price")
    private double price;

    public CottageFreeAppointment() {
    }

    public CottageFreeAppointment(long cottageId, LocalDateTime startingDate, LocalDateTime endingDate, int numberOfPeople, String additionalServices, double price) {
        super();
        this.cottageId = cottageId;
        this.startingDate = startingDate;
        this.endingDate = endingDate;
        this.numberOfPeople = numberOfPeople;
        this.additionalServices = additionalServices;
        this.price = price;
    }

    public long getCottageId() {
        return cottageId;
    }

    public void setCottageId(long cottageId) {
        this.cottageId = cottageId;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public LocalDateTime getStartingDate() {
        return startingDate;
    }

    public void setStartingDate(LocalDateTime startingDate) {
        this.startingDate = startingDate;
    }

    public LocalDateTime getEndingDate() {
        return endingDate;
    }

    public void setEndingDate(LocalDateTime endingDate) {
        this.endingDate = endingDate;
    }

    public int getNumberOfPeople() {
        return numberOfPeople;
    }

    public void setNumberOfPeople(int numberOfPeople) {
        this.numberOfPeople = numberOfPeople;
    }

    public String getAdditionalServices() {
        return additionalServices;
    }

    public void setAdditionalServices(String additionalServices) {
        this.additionalServices = additionalServices;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}
