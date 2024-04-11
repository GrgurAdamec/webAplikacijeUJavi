package hr.tvz.adamec.rentacarapp.repository;

import hr.tvz.adamec.rentacarapp.model.Vozilo;

import java.util.List;
import java.util.Optional;

public interface VoziloRepository {
    List<Vozilo> findAll();

    Optional<Vozilo> findVoziloByCode (Integer code);

    Vozilo saveVozilo (Vozilo vozilo);

    void deleteVozilo (String id);

    Optional<Vozilo> findVoziloByRegistration (String registration);

    Optional<Vozilo> findVoziloByUndercarriage (Integer undercarriage);
}
