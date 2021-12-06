package stasaaleksadavid.isabackend.model;


import javax.persistence.*;

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

    @Column(name = "")
    private String city;

    @Column(name="")
    private String addres;

    @Column(name="")
    private String country;

    @Column(name="")
    private String phoneNumber;

   

    public Client() {}



    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }
}
