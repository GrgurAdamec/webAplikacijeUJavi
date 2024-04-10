package hr.tvz.adamec.rentacarapp.service;

import hr.tvz.adamec.rentacarapp.model.VoziloDTO;

import java.util.List;

public interface VoziloService {
    List<VoziloDTO> findAll();
    VoziloDTO findVoziloByCode(String code);
}
