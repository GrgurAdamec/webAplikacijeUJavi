import { Component } from '@angular/core';
import { Vehicle } from '../../interface/vehicle';
import { VehicleServiceService } from '../../service/vehicle-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrl: './vehicle-list.component.css',
})
export class VehicleListComponent {
  vehicles: Vehicle[] = [];
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
    this.currentVehicle = vehicle;
    this.router.navigate(['/vehicles', vehicle.registration]);
  }

  removeVehicle(vehicle: Vehicle) {
    this.vehicleService.removeVehicleFromList(vehicle);
  }
}
