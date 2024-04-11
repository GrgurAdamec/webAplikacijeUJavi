package hr.tvz.adamec.rentacarapp.service;

import hr.tvz.adamec.rentacarapp.model.Vozilo;
import hr.tvz.adamec.rentacarapp.model.VoziloDTO;

import java.util.List;
import java.util.Optional;

public interface VoziloService {
    List<VoziloDTO> findAll();
    VoziloDTO findVoziloByCode(Integer code);
    VoziloDTO saveVozilo (VoziloDTO vozilo);
    void deleteVozilo (String id);

    VoziloDTO findVoziloDtoByRegistration (String registration);

    VoziloDTO findVoziloDtoByUndercarriage (Integer undercarriage);
}
