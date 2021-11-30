package stasaaleksadavid.isabackend.model;

public class CottageRoom {

    private long id;
    private String name;
    private int numberOfBeds;
    private boolean isFree;
    private long cottageId;

    public  CottageRoom() {}

    public CottageRoom(String name, int numberOfBeds, boolean isFree, long cottageId) {
        super();
        this.name = name;
        this.numberOfBeds = numberOfBeds;
        this.isFree = isFree;
        this.cottageId = cottageId;
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

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getCottageId() {
        return cottageId;
    }

    public void setCottageId(long cottageId) {
        this.cottageId = cottageId;
    }
}
