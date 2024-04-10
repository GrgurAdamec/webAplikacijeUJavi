package hr.tvz.adamec.rentacarapp.controller;

import hr.tvz.adamec.rentacarapp.model.VoziloDTO;
import hr.tvz.adamec.rentacarapp.service.VoziloService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/vehicles")
@AllArgsConstructor
public class HomePageVehicleController {
    private VoziloService voziloService;

    @GetMapping("vehicle/all")
    public List<VoziloDTO> getAllVehicles() {
        return voziloService.findAll();
    }

    @GetMapping("vehicle/{code}")
    public VoziloDTO getVehicleByCode(@PathVariable String code) {
        return voziloService.findVoziloByCode(code);
    }
}
