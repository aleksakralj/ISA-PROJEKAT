package com.example.ISAPROJEKAT.model;

public class CottageRoom {

    private String name;
    private int numberOfBeds;
    private boolean isFree;

    public  CottageRoom() {}

    public CottageRoom(String name, int numberOfBeds, boolean isFree) {
        this.name = name;
        this.numberOfBeds = numberOfBeds;
        this.isFree = isFree;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getNumberOfBeds() {
        return numberOfBeds;
    }

    public void setNumberOfBeds(int numberOfBeds) {
        this.numberOfBeds = numberOfBeds;
    }

    public boolean isFree() {
        return isFree;
    }

    public void setFree(boolean free) {
        isFree = free;
    }
}
