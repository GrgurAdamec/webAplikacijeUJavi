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
    public VoziloDTO findVoziloByCode(Integer code) {
        Optional<Vozilo> vozilo = voziloRepository.findVoziloByCode(code);
        VoziloDTO voziloDTO = null;

        if(vozilo.isPresent()) {
            voziloDTO = convertVoziloToVoziloDTO(vozilo.get());
        }

        return voziloDTO;
    }

    @Override
    public VoziloDTO saveVozilo(VoziloDTO voziloDTO) {
        Vozilo savedVozilo = voziloRepository.saveVozilo(convertVoziloDtoToVozilo(voziloDTO));

        if(savedVozilo != null) {
            return convertVoziloToVoziloDTO(savedVozilo);
        } else {
            return null;
        }
    }

    @Override
    public void deleteVozilo(String id) {
        voziloRepository.deleteVozilo(id);
    }

    @Override
    public VoziloDTO findVoziloDtoByRegistration(String registration) {
        Optional<Vozilo> vozilo = voziloRepository.findVoziloByRegistration(registration);
        VoziloDTO voziloDTO = null;

        if(vozilo.isPresent()) {
            voziloDTO = convertVoziloToVoziloDTO(vozilo.get());
        }

        return voziloDTO;
    }

    @Override
    public VoziloDTO findVoziloDtoByUndercarriage(Integer undercarriage) {
        Optional<Vozilo> vozilo = voziloRepository.findVoziloByUndercarriage(undercarriage);
        VoziloDTO voziloDTO = null;

        if(vozilo.isPresent()) {
            voziloDTO = convertVoziloToVoziloDTO(vozilo.get());
        }

        return voziloDTO;
    }

    private VoziloDTO convertVoziloToVoziloDTO(Vozilo vozilo) {
        boolean newInTheOffer = false;
        if (vozilo.getMileage() != null) {
            newInTheOffer = vozilo.getMileage() < 5000;
        }

        return new VoziloDTO(vozilo.getMaxNoOfPassengers(), vozilo.getGearbox(), vozilo.getAirConditioning(), vozilo.getNoOfDoors(), vozilo.getFuelType(), newInTheOffer, vozilo.getRegistration(), vozilo.getNoOfUndercarriage(), vozilo.getRegExpiry());
    }

    private Vozilo convertVoziloDtoToVozilo (VoziloDTO vozilo) {
        return new Vozilo(vozilo.getMaxNoOfPassengers(), vozilo.getGearbox(), vozilo.getAirConditioning(), vozilo.getNoOfDoors(), vozilo.getFuelType(), vozilo.getRegistration(), vozilo.getNoOfUndercarriage(), vozilo.getRegExpiry());
    }
}
