package stasaaleksadavid.isabackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import stasaaleksadavid.isabackend.model.CottageAppointment;


import java.util.List;

@Repository
public interface CottageAppointmentRepository extends JpaRepository<CottageAppointment, Long> {
    List<CottageAppointment> findByCottageId(Long cottageId );

    @Query("select CottApp from CottageAppointment CottApp where CottApp.clientId = ?1 ")
    List<CottageAppointment> findAllByClientId(Long clientId);

}
