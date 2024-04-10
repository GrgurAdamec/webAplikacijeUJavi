package hr.tvz.adamec.rentacarapp.command;

import jakarta.validation.constraints.*;

public class VoziloCommand {
    @NotNull (message = "Vehicle ID is missing")
    private Integer vehicleId;
    @Positive (message = "Max number of passangers cannot be a negative number")
    private Integer maxNoOfPassengers;
    @NotBlank (message = "Gearbox specification is missing")
    private String gearbox;
    @NotNull (message = "Air conditioning specification is missing")
    private String airConditioning;
    @PositiveOrZero (message = "Number of doors cannot be a negative number")
    private Integer noOfDoors;
    @NotNull (message = "Fuel type specification is missing")
    private String fuelType;
    @PositiveOrZero (message = "Last service date should not be negative")
    private String lastService;
    @NotNull (message = "Next service date is missing")
    private String nextService;
    @PositiveOrZero (message = "Mileage cannot be a negative number")
    private Integer mileage;
    @NotNull (message = "Vehicle registration is missing")
    private String registration;
    @NotNull (message = "Undercarriage specification is missing")
    private Integer noOfUndercarriage;
}
