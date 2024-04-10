import { Component, Input } from '@angular/core';
import { Vehicle } from '../../interface/vehicle';
import { ActivatedRoute } from '@angular/router';
import { VehicleServiceService } from '../../service/vehicle-service.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrl: './vehicle-details.component.css',
})
export class VehicleDetailsComponent {
  currentVehicle: Vehicle | null = null;
  currentVehicleRegistration: string = '';
  vehicles: Vehicle[] = [];

  constructor(
    private route: ActivatedRoute,
    private vehicleService: VehicleServiceService
  ) {}

  ngOnInit() {
    this.vehicleService.getVehicleList().subscribe((vehicles: Vehicle[]) => {
      this.vehicles = vehicles;
    });

    this.route.paramMap.subscribe((params) => {
      this.currentVehicleRegistration = params.get('id') || '';
      this.setCurrentVehicle();
    });
  }

  setCurrentVehicle() {
    this.currentVehicle = this.vehicles.find(
      (vehicle) => vehicle.registration === this.currentVehicleRegistration
    )!;
  }
}
