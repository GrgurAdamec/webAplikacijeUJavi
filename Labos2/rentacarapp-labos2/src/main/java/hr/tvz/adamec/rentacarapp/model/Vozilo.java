package hr.tvz.adamec.rentacarapp.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.springframework.cglib.core.Local;

import java.time.LocalDate;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class Vozilo {
    private Integer vehicleId;
    private Integer maxNoOfPassengers;
    private String gearbox;
    private String airConditioning;
    private Integer noOfDoors;
    private String fuelType;
    private String lastService;
    private String nextService;
    private Integer mileage;
    private String registration;
    private Integer noOfUndercarriage;
    private LocalDate regExpiry;

    public Vozilo(Integer maxNoOfPassengers, String gearbox, String airConditioning, Integer noOfDoors, String fuelType, String registration, Integer noOfUndercarriage, LocalDate regExpiry) {
        this.maxNoOfPassengers = maxNoOfPassengers;
        this.gearbox = gearbox;
        this.airConditioning = airConditioning;
        this.noOfDoors = noOfDoors;
        this.fuelType = fuelType;
        this.registration = registration;
        this.noOfUndercarriage = noOfUndercarriage;
        this.regExpiry = regExpiry;
    }
}
