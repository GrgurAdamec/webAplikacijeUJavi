import { Component } from '@angular/core';
import { Vehicle } from '../../interface/vehicle';
import { VehicleServiceService } from '../../service/vehicle-service.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrl: './vehicle-list.component.css',
})
export class VehicleListComponent {
  vehicles: Vehicle[] = [];
  currentVehicleRegistration: string = '';
  currentVehicle: Vehicle = {} as Vehicle;

  constructor(private vehicleService: VehicleServiceService) {}

  ngOnInit() {
    this.vehicleService.getVehicleList().subscribe((vehicles: Vehicle[]) => {
      this.vehicles = vehicles;
    });

    console.log(this.vehicles);
  }

  setCurrentVehicle(vehicle: Vehicle) {
    this.currentVehicleRegistration = vehicle.registration;
    this.currentVehicle = vehicle;
  }
}
