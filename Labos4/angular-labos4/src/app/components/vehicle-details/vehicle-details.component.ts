import { Component, Input } from '@angular/core';
import { Vehicle } from '../../interface/vehicle';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../service/data.service';
import { VehicleService } from '../../service/vehicle.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrl: './vehicle-details.component.css',
})
export class VehicleDetailsComponent {
  currentVehicle: Vehicle | null = null;
  editActive = false;

  newVehicle: Vehicle = {
    maxNoOfPassengers: 0,
    gearbox: '',
    airConditioning: '',
    noOfDoors: 0,
    fuelType: '',
    newInTheOffer: true,
    registration: '',
    noOfUndercarriage: 0,
    regExpiry: '',
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private vehicleService: VehicleService
  ) {}

  ngOnInit() {
    this.getCurrentVehicle();

    if (this.currentVehicle !== null) {
      this.newVehicle = this.currentVehicle;
    }
  }

  getCurrentVehicle() {
    this.currentVehicle = this.vehicleService.getCurrentVehicle();
  }

  back() {
    this.router.navigate(['/vehicles']);
  }

  editActiveChange() {
    this.editActive = !this.editActive;
  }

  onSubmit() {
    this.vehicleService.changeVehicle(this.newVehicle);

    this.editActive = false;
  }
}
