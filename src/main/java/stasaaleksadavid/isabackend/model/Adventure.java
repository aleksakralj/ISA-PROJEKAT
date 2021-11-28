package stasaaleksadavid.isabackend.model;

import java.time.LocalDate;
import java.util.ArrayList;

public class Adventure {

    private String name;
    private String addres;
    private String description;
    private String instructorBiography;
    private int maxPeople;
    private ArrayList<LocalDate> freeTerms = new ArrayList<LocalDate>();
    private String rulesOfConduct;
    private ArrayList<String> additionalEquipment = new ArrayList<String>();
    private String pricelist;
    private String termsOfReservation;

    public Adventure(String name, String addres, String description, String instructorBiography, int maxPeople, ArrayList<LocalDate> freeTerms, String rulesOfConduct, ArrayList<String> additionalEquipment, String pricelist, String termsOfReservation) {
        this.name = name;
        this.addres = addres;
        this.description = description;
        this.instructorBiography = instructorBiography;
        this.maxPeople = maxPeople;
        this.freeTerms = freeTerms;
        this.rulesOfConduct = rulesOfConduct;
        this.additionalEquipment = additionalEquipment;
        this.pricelist = pricelist;
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

    public String getPricelist() {
        return pricelist;
    }

    public void setPricelist(String pricelist) {
        this.pricelist = pricelist;
    }

    public String getTermsOfReservation() {
        return termsOfReservation;
    }

    public void setTermsOfReservation(String termsOfReservation) {
        this.termsOfReservation = termsOfReservation;
    }
}
