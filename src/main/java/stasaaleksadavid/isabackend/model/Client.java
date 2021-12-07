package stasaaleksadavid.isabackend.model;


import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "Clients")
public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "")
    private String email;

    @Column(name = "")
    private String passwrod;

    @Column(name= "")
    private String firstName;

    @Column(name="")
    private String lastName;

    @Column(name = "")
    private String city;

    @Column(name="")
    private String addres;

    @Column(name="")
    private String country;

    @Column(name="")
    private String phoneNumber;

    @Column(name = "")
    private LocalDateTime dateOfBirth;

    public Client() {}

    public Client(String email, String passwrod, LocalDateTime dateOfBirth, String firstName, String lastName,String city, String addres, String country, String phoneNumber) {
        super();
        this.email = email;
        this.passwrod = passwrod;
        this.dateOfBirth = dateOfBirth;
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city;
        this.addres = addres;
        this.country = country;
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPasswrod() {
        return passwrod;
    }

    public void setPasswrod(String passwrod) {
        this.passwrod = passwrod;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getAddres() {
        return addres;
    }

    public void setAddres(String addres) {
        this.addres = addres;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public LocalDateTime getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(LocalDateTime dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;


    }
}
