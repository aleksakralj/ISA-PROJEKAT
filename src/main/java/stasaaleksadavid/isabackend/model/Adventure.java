package stasaaleksadavid.isabackend.model;

import java.time.LocalDate;
import java.util.ArrayList;

public class Adventure {

    private String name;
    private String address;
    private String description;
    private String instructorBiography;
    private int maxPeople;
    private ArrayList<LocalDate> freeTerms = new ArrayList<LocalDate>();
    private String rulesOfConduct;
    private ArrayList<String> additionalEquipment = new ArrayList<String>();
    private String priceList;
    private String termsOfReservation;

    public Adventure(String name, String address, String description, String instructorBiography, int maxPeople, ArrayList<LocalDate> freeTerms, String rulesOfConduct, ArrayList<String> additionalEquipment, String priceList, String termsOfReservation) {
        this.name = name;
        this.address = address;
        this.description = description;
        this.instructorBiography = instructorBiography;
        this.maxPeople = maxPeople;
        this.freeTerms = freeTerms;
        this.rulesOfConduct = rulesOfConduct;
        this.additionalEquipment = additionalEquipment;
        this.priceList = priceList;
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

    public String getInstructorBiography() {
        return instructorBiography;
    }

    public void setInstructorBiography(String instructorBiography) {
        this.instructorBiography = instructorBiography;
    }

    public int getMaxPeople() {
        return maxPeople;
    }

    public void setMaxPeople(int maxPeople) {
        this.maxPeople = maxPeople;
    }

    public ArrayList<LocalDate> getFreeTerms() {
        return freeTerms;
    }

    public void setFreeTerms(ArrayList<LocalDate> freeTerms) {
        this.freeTerms = freeTerms;
    }

    public String getRulesOfConduct() {
        return rulesOfConduct;
    }

    public void setRulesOfConduct(String rulesOfConduct) {
        this.rulesOfConduct = rulesOfConduct;
    }

    public ArrayList<String> getAdditionalEquipment() {
        return additionalEquipment;
    }

    public void setAdditionalEquipment(ArrayList<String> additionalEquipment) {
        this.additionalEquipment = additionalEquipment;
    }

    public String getPriceList() {
        return priceList;
    }

    public void setPriceList(String priceList) {
        this.priceList = priceList;
    }

    public String getTermsOfReservation() {
        return termsOfReservation;
    }

    public void setTermsOfReservation(String termsOfReservation) {
        this.termsOfReservation = termsOfReservation;
    }

}
