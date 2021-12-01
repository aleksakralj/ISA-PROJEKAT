package stasaaleksadavid.isabackend.model;

import java.time.LocalDate;
import java.util.ArrayList;

public class Ship {

    private String id;
    private String name;
    private String type;
    private int length;                  //cm
    private int numberOfEngines;
    private int enginePower;
    private int maxSpeed;
    private int capacity;                //num of people
    private String address;
    private String description;
    private double rating;
    private ArrayList<LocalDate> freeTerms = new ArrayList<LocalDate>();
    private ArrayList<String> priceList = new ArrayList<>();
    private ArrayList<String> additionalServices = new ArrayList<>();
    private String rulesOfConduct;
    private String termsOfReservation;

    public Ship() {}

    public Ship(String id, String name, String type, int length, int numberOfEngines, int enginePower, int maxSpeed, int capacity, String address, String description, double rating, ArrayList<LocalDate> freeTerms, ArrayList<String> priceList, ArrayList<String> additionalServices, String rulesOfConduct, String termsOfReservation) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.length = length;
        this.numberOfEngines = numberOfEngines;
        this.enginePower = enginePower;
        this.maxSpeed = maxSpeed;
        this.capacity = capacity;
        this.address = address;
        this.description = description;
        this.rating = rating;
        this.freeTerms = freeTerms;
        this.priceList = priceList;
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



    public ArrayList<String> getAdditionalServices() {
        return additionalServices;
    }

    public void setAdditionalServices(ArrayList<String> additionalServices) {
        this.additionalServices = additionalServices;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
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

    public int getLength() {
        return length;
    }

    public void setLength(int length) {
        this.length = length;
    }

    public ArrayList<String> getPriceList() {
        return priceList;
    }

    public void setPriceList(ArrayList<String> priceList) {
        this.priceList = priceList;
    }
}
