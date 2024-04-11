import { Injectable } from '@angular/core';
import { Vehicle } from '../interface/vehicle';
import { DataService } from './data.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  currentVehicle: Vehicle | null = null;

  setCurrentVehicle(vehicle: Vehicle): void {
    this.currentVehicle = vehicle;
  }

  getCurrentVehicle(): Vehicle {
    return this.currentVehicle!;
  }

  constructor(private dataService: DataService) {}

  getVehicleList(): Observable<Vehicle[]> {
    return this.dataService.getVehicles();
  }

  addVehicleToList(newVehicle: Vehicle): Observable<Vehicle> {
    return this.dataService.addVehicle(newVehicle);
  }

  removeVehicleFromList(vehicle: Vehicle): Observable<Vehicle> {
    return this.dataService.deleteVehicle(vehicle.registration);
  }
}
