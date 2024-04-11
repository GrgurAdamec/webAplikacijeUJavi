import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicle } from '../interface/vehicle';
import { Observable, catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private vehiclesUrl = 'http://localhost:8080/vehicles';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getVehicles(): Observable<Vehicle[]> {
    return this.http
      .get<Vehicle[]>(this.vehiclesUrl + '/all')
      .pipe(tap((_) => console.log('fetched vehicles')));
  }

  addVehicle(vehicle: Vehicle): Observable<Vehicle> {
    return this.http
      .post<Vehicle>(
        this.vehiclesUrl + '/saveVehicle',
        vehicle,
        this.httpOptions
      )
      .pipe(
        tap((newVehicle: Vehicle) =>
          console.log(
            `added vehicle w/ registration=${newVehicle.registration}`
          )
        )
      );
  }

  deleteVehicle(vehicle: Vehicle | string): Observable<Vehicle> {
    const registration =
      typeof vehicle === 'string' ? vehicle : vehicle.registration;
    const url = `${this.vehiclesUrl}/delete/${registration}`;
    return this.http
      .delete<Vehicle>(url, this.httpOptions)
      .pipe(
        tap((_) => console.log(`deleted vehicle registration=${registration}`))
      );
  }

  constructor(private http: HttpClient) {}
}
