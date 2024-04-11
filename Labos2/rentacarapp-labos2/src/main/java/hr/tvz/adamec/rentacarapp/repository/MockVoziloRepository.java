package hr.tvz.adamec.rentacarapp.repository;

import hr.tvz.adamec.rentacarapp.model.Vozilo;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Repository
public class MockVoziloRepository implements VoziloRepository {
    private static List<Vozilo> vozila = new ArrayList<>();

    static {
        Vozilo prvoZovilo = new Vozilo(1, 5, "Prvi", "Prva", 5, "Dizel", "12.12.2023.", "12.12.2024.", 92345, "ZG172HR", 2);
        Vozilo drugoVozilo = new Vozilo(2, 2, "Drugi", "Drugi", 3, "Struja", "1.6.2023.", "1.6.2024.", 1012, "KA123PF", 5);
        vozila.add(prvoZovilo);
        vozila.add(drugoVozilo);
    }

    @Override
    public List<Vozilo> findAll() {
        return vozila;
    }

    @Override
    public Optional<Vozilo> findVoziloByCode(Integer code) {
        return findAll().stream()
                .filter(v -> v.getVehicleId().equals(code))
                .findFirst();
    }

    @Override
    public Vozilo saveVozilo(Vozilo vozilo) {
        if(vozila.stream().noneMatch(v -> v.getRegistration().equals(vozilo.getRegistration())) && vozila.stream().noneMatch(v -> v.getNoOfUndercarriage().equals(vozilo.getNoOfUndercarriage()))) {
            Integer newID = generateNewVoziloID();
            vozilo.setVehicleId(newID);
            vozila.add(vozilo);

            return vozilo;
        }

        return null;
    }

    @Override
    public void deleteVozilo(String id) {
        vozila = vozila.stream().filter(v -> !Objects.equals(v.getRegistration(), id)).toList();
    }

    @Override
    public Optional<Vozilo> findVoziloByRegistration(String registration) {
        return findAll().stream()
                .filter(v -> v.getRegistration().equals(registration))
                .findFirst();
    }

    @Override
    public Optional<Vozilo> findVoziloByUndercarriage(Integer undercarriage) {
        return findAll().stream()
                .filter(v -> v.getNoOfUndercarriage().equals(undercarriage))
                .findFirst();
    }

    private Integer generateNewVoziloID() {
        Optional<Vozilo> lastIdOptional = vozila.stream()
                .max((v1, v2) -> v1.getVehicleId().compareTo(v2.getVehicleId()));

        if(lastIdOptional.isPresent()) {
            Vozilo vozilo = lastIdOptional.get();
            return vozilo.getVehicleId() + 1;
        } else {
            return 1;
        }
    }
}
