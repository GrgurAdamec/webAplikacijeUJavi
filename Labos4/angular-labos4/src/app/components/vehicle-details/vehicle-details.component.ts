import { Component, Input } from '@angular/core';
import { Vehicle } from '../../interface/vehicle';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrl: './vehicle-details.component.css',
})
export class VehicleDetailsComponent {
  @Input() currentVehicle: Vehicle | null = null;
}
