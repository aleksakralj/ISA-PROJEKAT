package com.example.ISAPROJEKAT.model;
import java.util.ArrayList;

public class Cottage {

    private String id;
    private String name;
    private String addres;
    private String description;
    private double rating;
    private int numberOfRooms;
    private ArrayList<CottageRoom> cottageRoomsData = new ArrayList<CottageRoom>();
    private String rulesOfConduct;
    private String pricelist;
    private ArrayList<String> additionalServices = new ArrayList<String>();

    public Cottage() {}

    public Cottage(String id, String name, String addres, String description, double rating, int numberOfRooms) {
        this.id = id;
        this.name = name;
        this.addres = addres;
        this.description = description;
        this.rating = rating;
        this.numberOfRooms = numberOfRooms;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddres () {
        return addres;
    }

    public void setAddres (String addres) {
        this.addres = addres;
    }

    public String getDescription(){
        return description;
    }

    public void setDescription (String description) {
        this.description =description;
    }

    public double getRating() {
        return rating;
    }

    public void setRating (double rating) {
        this.rating = rating;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getId() {
        return id;
    }

    public int getNumberOfRooms() {
        return numberOfRooms;
    }

    public void setNumberOfRooms(int numberOfRooms) {
        this.numberOfRooms = numberOfRooms;
    }

    public ArrayList<CottageRoom> getCottageRoomsData() {
        return cottageRoomsData;
    }

    public void setCottageRoomsData(ArrayList<CottageRoom> cottageRoomsData) {
        this.cottageRoomsData = cottageRoomsData;
    }
}
