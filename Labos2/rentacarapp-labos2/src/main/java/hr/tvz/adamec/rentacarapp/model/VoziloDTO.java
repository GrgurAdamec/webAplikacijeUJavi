package hr.tvz.adamec.rentacarapp.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class VoziloDTO {
    private Integer maxNoOfPassengers;
    private String gearbox;
    private String airConditioning;
    private Integer noOfDoors;
    private String fuelType;
    private boolean newInTheOffer;
    private String registration;
    private Integer noOfUndercarriage;
    private LocalDate regExpiry;
}
