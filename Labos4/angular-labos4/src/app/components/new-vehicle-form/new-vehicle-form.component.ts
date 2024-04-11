import { Component } from '@angular/core';
import { Vehicle } from '../../interface/vehicle';
import { DataService } from '../../service/data.service';
import { VehicleService } from '../../service/vehicle.service';

@Component({
  selector: 'app-new-vehicle-form',
  templateUrl: './new-vehicle-form.component.html',
  styleUrl: './new-vehicle-form.component.css',
})
export class NewVehicleFormComponent {
  showFormValue = false;
  newVehicle: Vehicle = {
    maxNoOfPassengers: 0,
    gearbox: '',
    airConditioning: '',
    noOfDoors: 0,
    fuelType: '',
    newInTheOffer: true,
    registration: '',
    noOfUndercarriage: 0,
  };

  onSubmit() {
    console.log(this.newVehicle);

    this.vehicleService.addVehicleToList(this.newVehicle);
  }

  changeShowFormValue() {
    this.showFormValue = !this.showFormValue;
    console.log(this.showFormValue);
  }

  addVehicle() {
    console.log(this.newVehicle);
    this.vehicleService.addVehicleToList(this.newVehicle);
  }

  constructor(
    private vehicleService: VehicleService,
    dataService: DataService
  ) {}
}
