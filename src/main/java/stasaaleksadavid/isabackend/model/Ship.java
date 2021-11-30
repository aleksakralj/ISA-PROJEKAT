package stasaaleksadavid.isabackend.model;

import java.time.LocalDate;
import java.util.ArrayList;

public class Ship {

    private long id;
    private long ownerId;
    private String name;
    private String type;
    private int lenght;                  //cm
    private int numberOfEngines;
    private int enginePower;
    private int maxSpeed;
    private int capacity;                //num of people
    private String addres;
    private String description;
    private double rating;
    private ArrayList<LocalDate> freeTerms = new ArrayList<LocalDate>();
    private ArrayList<String> pricelist = new ArrayList<>();
    private ArrayList<String> additionalServices = new ArrayList<>();
    private String rulesOfConduct;
    private String termsOfReservation;

    public Ship() {}

    public Ship(long id,long ownerId ,String name, String type, int lenght, int numberOfEngines, int enginePower, int maxSpeed, int capacity, String addres, String description, double rating, ArrayList<LocalDate> freeTerms, ArrayList<String> pricelist, ArrayList<String> additionalServices, String rulesOfConduct, String termsOfReservation) {
        this.id = id;
        this.ownerId= ownerId;
        this.name = name;
        this.type = type;
        this.lenght = lenght;
        this.numberOfEngines = numberOfEngines;
        this.enginePower = enginePower;
        this.maxSpeed = maxSpeed;
        this.capacity = capacity;
        this.addres = addres;
        this.description = description;
        this.rating = rating;
        this.freeTerms = freeTerms;
        this.pricelist = pricelist;
        this.additionalServices = additionalServices;
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

    public ArrayList<LocalDate> getFreeTerms() {
        return freeTerms;
    }

    public void setFreeTerms(ArrayList<LocalDate> freeTerms) {
        this.freeTerms = freeTerms;
    }

    public ArrayList<String> getPricelist() {
        return pricelist;
    }

    public void setPricelist(ArrayList<String> pricelist) {
        this.pricelist = pricelist;
    }

    public ArrayList<String> getAdditionalServices() {
        return additionalServices;
    }

    public void setAdditionalServices(ArrayList<String> additionalServices) {
        this.additionalServices = additionalServices;
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

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getLenght() {
        return lenght;
    }

    public void setLenght(int lenght) {
        this.lenght = lenght;
    }

    public int getNumberOfEngines() {
        return numberOfEngines;
    }

    public void setNumberOfEngines(int numberOfEngines) {
        this.numberOfEngines = numberOfEngines;
    }

    public int getEnginePower() {
        return enginePower;
    }

    public void setEnginePower(int enginePower) {
        this.enginePower = enginePower;
    }

    public int getMaxSpeed() {
        return maxSpeed;
    }

    public void setMaxSpeed(int maxSpeed) {
        this.maxSpeed = maxSpeed;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
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
