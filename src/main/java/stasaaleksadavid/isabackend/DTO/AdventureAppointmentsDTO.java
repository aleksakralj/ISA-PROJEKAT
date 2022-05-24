package stasaaleksadavid.isabackend.DTO;

import java.time.LocalDate;

public class AdventureAppointmentsDTO {

    private Long id;
    private String name;
    private String address;
    private String instructorName;
    private Long clientId;
    private LocalDate startingDate;
    private LocalDate endingDate;


    public  AdventureAppointmentsDTO(){};
    public AdventureAppointmentsDTO(String name, String address, String instructorName, Long clientId, LocalDate startingDate, LocalDate endingDate) {
        this.name = name;
        this.address = address;
        this.instructorName = instructorName;
        this.clientId = clientId;
        this.startingDate = startingDate;
        this.endingDate = endingDate;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public String getInstructorName() {
        return instructorName;
    }

    public void setInstructorName(String instructorName) {
        this.instructorName = instructorName;
    }

    public Long getClientId() {
        return clientId;
    }

    public void setClientId(Long clientId) {
        this.clientId = clientId;
    }

    public LocalDate getStartingDate() {
        return startingDate;
    }

    public void setStartingDate(LocalDate startingDate) {
        this.startingDate = startingDate;
    }

    public LocalDate getEndingDate() {
        return endingDate;
    }

    public void setEndingDate(LocalDate endingDate) {
        this.endingDate = endingDate;
    }
}