package com.example.ISAPROJEKAT.model;
import java.time.LocalDate;

public class FishingInstructor {

    private String id;
    private String passwrod;
    private String name;
    private String surname;
    private LocalDate dateOfBirth;
    private String eMail;
    private String phoneNumber;
    private String addres;
    private String city;
    private String country;

    public FishingInstructor() {}

    public FishingInstructor(String id, String passwrod, String name, String surname, LocalDate dateOfBirth, String eMail, String phoneNumber, String addres, String city, String country) {
        this.id = id;
        this.passwrod = passwrod;
        this.name = name;
        this.surname = surname;
        this.dateOfBirth = dateOfBirth;
        this.eMail = eMail;
        this.phoneNumber = phoneNumber;
        this.addres = addres;
        this.city = city;
        this.country = country;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPasswrod() {
        return passwrod;
    }

    public void setPasswrod(String passwrod) {
        this.passwrod = passwrod;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String geteMail() {
        return eMail;
    }

    public void seteMail(String eMail) {
        this.eMail = eMail;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getAddres() {
        return addres;
    }

    public void setAddres(String addres) {
        this.addres = addres;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }
}
