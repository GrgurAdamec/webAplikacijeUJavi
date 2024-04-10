import { Component } from '@angular/core';
import { Vehicle } from '../../interface/vehicle';
import { VehicleServiceService } from '../../service/vehicle-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrl: './vehicle-list.component.css',
})
export class VehicleListComponent {
  vehicles: Vehicle[] = [];
  currentVehicleRegistration: string = '';
  currentVehicle: Vehicle | null = null;

  constructor(
    private vehicleService: VehicleServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.vehicleService.getVehicleList().subscribe((vehicles: Vehicle[]) => {
      this.vehicles = vehicles;
    });
  }

  setCurrentVehicle(vehicle: Vehicle) {
    this.currentVehicleRegistration = vehicle.registration;
    this.currentVehicle = vehicle;
    this.router.navigate(['/vehicles', vehicle.registration]);
  }
}
