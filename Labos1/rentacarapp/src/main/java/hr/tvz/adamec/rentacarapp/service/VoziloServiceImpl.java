package hr.tvz.adamec.rentacarapp.service;

import hr.tvz.adamec.rentacarapp.model.Vozilo;
import hr.tvz.adamec.rentacarapp.model.VoziloDTO;
import hr.tvz.adamec.rentacarapp.repository.VoziloRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class VoziloServiceImpl implements VoziloService {

    private VoziloRepository voziloRepository;

    @Override
    public List<VoziloDTO> findAll() {
        return voziloRepository.findAll().stream().map(this::convertVoziloToVoziloDTO).toList();
    }

    @Override
    public VoziloDTO findVoziloByCode(String code) {
        Optional<Vozilo> vozilo = voziloRepository.findVoziloByCode(code);
        VoziloDTO voziloDTO = null;

        if(vozilo.isPresent()) {
            voziloDTO = convertVoziloToVoziloDTO(vozilo.get());
        }

        return voziloDTO;
    }

    private VoziloDTO convertVoziloToVoziloDTO(Vozilo vozilo) {
        boolean newInTheOffer;
        newInTheOffer = vozilo.getMileage() < 5000;

        return new VoziloDTO(vozilo.getMaxNoOfPassengers(), vozilo.getGearbox(), vozilo.getAirConditioning(), vozilo.getNoOfDoors(), vozilo.getFuelType(), newInTheOffer);
    }
}
