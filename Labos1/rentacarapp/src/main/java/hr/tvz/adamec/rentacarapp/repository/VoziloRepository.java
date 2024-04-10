package hr.tvz.adamec.rentacarapp.repository;

import hr.tvz.adamec.rentacarapp.model.Vozilo;

import java.util.List;
import java.util.Optional;

public interface VoziloRepository {
    List<Vozilo> findAll();

    Optional<Vozilo> findVoziloByCode (String code);
}
