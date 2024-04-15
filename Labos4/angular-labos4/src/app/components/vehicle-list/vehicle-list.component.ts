import { Component } from '@angular/core';
import { Vehicle } from '../../interface/vehicle';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { DataService } from '../../service/data.service';
import { VehicleService } from '../../service/vehicle.service';
import { response } from 'express';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrl: './vehicle-list.component.css',
})
export class VehicleListComponent {
  vehicles: Vehicle[] = [];
  vehiclesBehaviorSubject: BehaviorSubject<Vehicle[]> | null = null;
  subscription: Subscription | null = null;
  currentVehicle: Vehicle | null = null;

  constructor(
    private vehicleService: VehicleService,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.vehiclesBehaviorSubject = this.vehicleService.getVehicleList();
    this.subscription = this.vehiclesBehaviorSubject.subscribe((response) => {
      this.vehicles = response as Vehicle[];
    });
    console.log(this.vehicles);
  }

  setCurrentVehicle(vehicle: Vehicle) {
    this.vehicleService.setCurrentVehicle(vehicle);
    this.router.navigate(['/vehicles', vehicle.registration]);
  }

  removeVehicle(vehicle: Vehicle) {
    this.vehicleService.removeVehicleFromList(vehicle).subscribe((x) => {
      this.vehicles.splice(this.vehicles.indexOf(vehicle), 1);
    });
  }

  expiryDateList() {
    this.router.navigate(['/expiry-date-list']);
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
