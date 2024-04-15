import { Component } from '@angular/core';
import { VehicleService } from '../../service/vehicle.service';
import { Router } from '@angular/router';
import { Vehicle } from '../../interface/vehicle';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-expiry-date-list',
  templateUrl: './expiry-date-list.component.html',
  styleUrl: './expiry-date-list.component.css',
})
export class ExpiryDateListComponent {
  vehicles: Vehicle[] = [];
  vehiclesBehaviorSubject: BehaviorSubject<Vehicle[]> | null = null;
  subscription: Subscription | null = null;
  currentVehicle: Vehicle | null = null;

  constructor(private vehicleService: VehicleService, private router: Router) {}

  setCurrentVehicle(vehicle: Vehicle) {
    this.vehicleService.setCurrentVehicle(vehicle);
    this.router.navigate(['/vehicles', vehicle.registration]);
  }

  ngOnInit() {
    this.vehiclesBehaviorSubject = this.vehicleService.getVehicleList();
    this.subscription = this.vehiclesBehaviorSubject.subscribe((response) => {
      let vehicleList = response as Vehicle[];
      this.vehicles = vehicleList.filter((vehicle) => {
        let today = new Date();
        let regExpiry = new Date(vehicle.regExpiry);
        return today > regExpiry;
      });
    });
  }
}
