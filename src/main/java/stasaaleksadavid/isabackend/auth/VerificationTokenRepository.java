package stasaaleksadavid.isabackend.auth;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface VerificationTokenRepository extends JpaRepository<VerificationToken, Long> {

    @Query("select Token from VerificationToken Token where Token.confirmationToken = ?1")
    VerificationToken findByConfirmationToken(String confirmationToken);
}
