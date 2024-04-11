package hr.tvz.adamec.rentacarapp.controller;

import hr.tvz.adamec.rentacarapp.model.VoziloDTO;
import hr.tvz.adamec.rentacarapp.service.VoziloService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/vehicles")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class HomePageVehicleController {
    private VoziloService voziloService;

    @GetMapping("/all")
    public List<VoziloDTO> getAllVehicles() {
        return voziloService.findAll();
    }

    @GetMapping("getByCode/{code}")
    public VoziloDTO getVehicleByCode(@PathVariable Integer code) {
        return voziloService.findVoziloByCode(code);
    }

    @PostMapping("/saveVehicle")
    public ResponseEntity<VoziloDTO> saveNewVozilo(@RequestBody VoziloDTO voziloDTO) {
        VoziloDTO savedVoziloDTO = voziloService.saveVozilo(voziloDTO);

        if(savedVoziloDTO != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body(savedVoziloDTO);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(savedVoziloDTO);
        }
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable String id) {
        voziloService.deleteVozilo(id);
    }

    @GetMapping("getByRegistration/{registration}")
    public VoziloDTO getVehicleByRegistration(@PathVariable String registration) {
        return voziloService.findVoziloDtoByRegistration(registration);
    }

    @GetMapping("getByUndercarriage/{undercarriage}")
    public VoziloDTO getVehicleByUndercarriage(@PathVariable Integer undercarriage) {
        return voziloService.findVoziloDtoByUndercarriage(undercarriage);
    }
}
