package stasaaleksadavid.isabackend.DTO;

import org.springframework.stereotype.Component;
import stasaaleksadavid.isabackend.model.Adventure;
import stasaaleksadavid.isabackend.model.AdventureAppointment;
import stasaaleksadavid.isabackend.model.User;

import java.time.LocalDate;

@Component
public class Mapper {

    public AdventureAppointmentsDTO toDto (Adventure adventure, User user, AdventureAppointment adventureAppointment ) {

        Long id = adventureAppointment.getAdventureId();
        String name = adventure.getName();
        String address = adventure.getAddress();
        String instructorName = user.getFirstName() + " " + user.getLastName();
        Long clientId = user.getId();
        LocalDate startingDate = adventureAppointment.getStartingDate();
        LocalDate endingDate = adventureAppointment.getEndingDate();

        return new AdventureAppointmentsDTO(name, address, instructorName, clientId, startingDate, endingDate);

    }

}
