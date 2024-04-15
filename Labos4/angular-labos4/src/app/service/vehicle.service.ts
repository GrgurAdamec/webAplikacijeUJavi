import { Injectable } from '@angular/core';
import { Vehicle } from '../interface/vehicle';
import { DataService } from './data.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { response } from 'express';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  currentVehicle: Vehicle | null = null;
  vehicles: Vehicle[] = [];
  vehicleSubject = new BehaviorSubject<Vehicle[]>(this.vehicles);

  setCurrentVehicle(vehicle: Vehicle): void {
    this.currentVehicle = vehicle;
  }

  getCurrentVehicle(): Vehicle {
    return this.currentVehicle!;
  }

  constructor(private dataService: DataService) {
    this.init;
  }

  getVehicleList() {
    return this.vehicleSubject;
  }

  addVehicleToList(newVehicle: Vehicle) {
    this.dataService.addVehicle(newVehicle).subscribe((response) => {
      this.vehicles.push(response as Vehicle);
      this.vehicleSubject.next(this.vehicles);
    });
  }

  removeVehicleFromList(vehicle: Vehicle): Observable<Vehicle> {
    return this.dataService.deleteVehicle(vehicle.registration);
  }

  changeVehicle(newVehicle: Vehicle) {
    this.dataService.addVehicle(newVehicle).subscribe((response) => {
      let indexToUpdate = this.vehicles.findIndex(
        (item) => item.registration === newVehicle.registration
      );
      this.vehicles[indexToUpdate] = newVehicle;
      this.vehicleSubject.next(this.vehicles);
    });
  }

  init() {
    console.log('init');
    this.dataService.getVehicles().subscribe((response) => {
      this.vehicles = response as Vehicle[];
      this.vehicleSubject.next(this.vehicles);
    });
  }
}
