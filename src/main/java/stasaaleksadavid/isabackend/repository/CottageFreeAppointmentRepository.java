package stasaaleksadavid.isabackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import stasaaleksadavid.isabackend.model.CottageFreeAppointment;


import java.time.LocalDate;
import java.util.List;

@Repository
public interface CottageFreeAppointmentRepository extends JpaRepository<CottageFreeAppointment, Long> {
    List<CottageFreeAppointment> findByCottageId(Long cottageId );

    @Query("select FreeApp from CottageFreeAppointment FreeApp where FreeApp.startingDate = ?1 and FreeApp.endingDate = ?2")
    List<CottageFreeAppointment> findCottageFreeAppointmentByStartingDateAndEndingDate(LocalDate startingDate, LocalDate endingDate);
}
