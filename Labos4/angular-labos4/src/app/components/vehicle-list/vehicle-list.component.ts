import { Component } from '@angular/core';
import { Vehicle } from '../../interface/vehicle';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { DataService } from '../../service/data.service';
import { VehicleService } from '../../service/vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrl: './vehicle-list.component.css',
})
export class VehicleListComponent {
  vehicles: Vehicle[] = [];
  currentVehicle: Vehicle | null = null;

  constructor(
    private vehicleService: VehicleService,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.dataService.getVehicles().subscribe((vehicles: Vehicle[]) => {
      this.vehicles = vehicles;
    });
  }

  setCurrentVehicle(vehicle: Vehicle) {
    this.vehicleService.setCurrentVehicle(vehicle);
    this.router.navigate(['/vehicles', vehicle.registration]);
  }

  removeVehicle(vehicle: Vehicle) {
    this.vehicleService.removeVehicleFromList(vehicle);
  }
}
