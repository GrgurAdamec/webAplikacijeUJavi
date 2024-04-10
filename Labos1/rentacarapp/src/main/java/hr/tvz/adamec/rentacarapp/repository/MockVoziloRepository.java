package hr.tvz.adamec.rentacarapp.repository;

import hr.tvz.adamec.rentacarapp.model.Vozilo;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Repository
public class MockVoziloRepository implements VoziloRepository {
    @Override
    public List<Vozilo> findAll() {
        Vozilo prvoZovilo = new Vozilo("789236827", 5, "Prvi", "Prva", 5, "Dizel", "12.12.2023.", "12.12.2024.", 92345);
        Vozilo drugoVozilo = new Vozilo("749201750", 2, "Drugi", "Drugi", 3, "Struja", "1.6.2023.", "1.6.2024.", 1012);

        List<Vozilo> vozila = new ArrayList<>();
        vozila.add(prvoZovilo);
        vozila.add(drugoVozilo);

        return vozila;
    }

    @Override
    public Optional<Vozilo> findVoziloByCode(String code) {
        return findAll().stream()
                .filter(v -> v.getVehicleId().equals(code))
                .findFirst();
    }
}
