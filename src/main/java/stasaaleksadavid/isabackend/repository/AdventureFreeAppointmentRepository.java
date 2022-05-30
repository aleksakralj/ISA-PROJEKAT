package stasaaleksadavid.isabackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import stasaaleksadavid.isabackend.model.AdventureFreeAppointment;

import javax.xml.crypto.Data;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Repository
public interface AdventureFreeAppointmentRepository extends JpaRepository<AdventureFreeAppointment, Long> {
    List<AdventureFreeAppointment> findByInstructorId(Long instructorId );
    List<AdventureFreeAppointment> findByAdventureId(Long adventureId );

    @Query("select FreeApp from AdventureFreeAppointment FreeApp where FreeApp.startingDate <= ?1 and FreeApp.endingDate >= ?2")
    List<AdventureFreeAppointment> findAdventureFreeAppointmentByStartingDateAndEndingDate(LocalDate startingDate, LocalDate endingDate);
}
