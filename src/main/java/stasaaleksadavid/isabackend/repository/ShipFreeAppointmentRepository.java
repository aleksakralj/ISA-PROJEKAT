package stasaaleksadavid.isabackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import stasaaleksadavid.isabackend.model.ShipFreeAppointment;


import java.time.LocalDate;
import java.util.List;

@Repository
public interface ShipFreeAppointmentRepository extends JpaRepository<ShipFreeAppointment, Long> {
    List<ShipFreeAppointment> findByShipId(Long shipId );

    @Query("select FreeApp from ShipFreeAppointment FreeApp where FreeApp.startingDate = ?1 and FreeApp.endingDate = ?2")
    List<ShipFreeAppointment> findShipFreeAppointmentByStartingDateAndEndingDate (LocalDate startingDate, LocalDate endingDate);
}
