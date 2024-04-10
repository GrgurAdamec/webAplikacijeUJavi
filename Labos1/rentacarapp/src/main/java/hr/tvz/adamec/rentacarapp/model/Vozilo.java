package hr.tvz.adamec.rentacarapp.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Vozilo {
    private String vehicleId;
    private Integer maxNoOfPassengers;
    private String gearbox;
    private String airConditioning;
    private Integer noOfDoors;
    private String fuelType;
    private String lastService;
    private String nextService;
    private Integer mileage;
}
