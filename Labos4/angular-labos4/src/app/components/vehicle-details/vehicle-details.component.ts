import { Component, Input } from '@angular/core';
import { Vehicle } from '../../interface/vehicle';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../service/data.service';
import { VehicleService } from '../../service/vehicle.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrl: './vehicle-details.component.css',
})
export class VehicleDetailsComponent {
  currentVehicle: Vehicle | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private vehicleService: VehicleService
  ) {}

  ngOnInit() {
    this.getCurrentVehicle();
  }

  getCurrentVehicle() {
    this.currentVehicle = this.vehicleService.getCurrentVehicle();
  }

  back() {
    this.router.navigate(['/vehicles']);
  }
}
