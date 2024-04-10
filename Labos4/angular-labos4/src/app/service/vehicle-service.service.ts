import { Injectable } from '@angular/core';
import { Vehicle } from '../interface/vehicle';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VehicleServiceService {
  vehicleList: Vehicle[] = [
    {
      maxNoOfPassengers: 4,
      gearbox: 'manual',
      airConditioning: 'yes',
      noOfDoors: 4,
      fuelType: 'diesel',
      newInTheOffer: true,
      registration: 'KA123PR',
      noOfUndercarriage: 447029375,
    },
    {
      maxNoOfPassengers: 3,
      gearbox: 'automatic',
      airConditioning: 'yes',
      noOfDoors: 3,
      fuelType: 'diesel',
      newInTheOffer: true,
      registration: 'ZG123RR',
      noOfUndercarriage: 859302849,
    },
    {
      maxNoOfPassengers: 7,
      gearbox: 'manual',
      airConditioning: 'no',
      noOfDoors: 5,
      fuelType: 'diesel',
      newInTheOffer: true,
      registration: 'ST123UZ',
      noOfUndercarriage: 417698026,
    },
    {
      maxNoOfPassengers: 4,
      gearbox: 'automatic',
      airConditioning: 'yes',
      noOfDoors: 5,
      fuelType: 'diesel',
      newInTheOffer: true,
      registration: 'ZG123OA',
      noOfUndercarriage: 472910472,
    },
  ];

  constructor() {}

  getVehicleList(): Observable<Vehicle[]> {
    return new Observable((observer) => {
      observer.next(this.vehicleList);
      observer.complete();
    });
  }

  addVehicleToList(newVehicle: Vehicle) {
    this.vehicleList.push(newVehicle);
  }

  removeVehicleFromList(vehicle: Vehicle) {
    const index: number = this.vehicleList.indexOf(vehicle);
    if (index !== -1) {
      this.vehicleList.splice(index, 1);
    }
  }
}
