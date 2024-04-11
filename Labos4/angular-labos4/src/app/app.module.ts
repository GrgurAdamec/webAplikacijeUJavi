import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { VehicleDetailsComponent } from './components/vehicle-details/vehicle-details.component';
import { Route, RouterModule, provideRouter } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NewVehicleFormComponent } from './components/new-vehicle-form/new-vehicle-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes: Route[] = [
  { path: '', component: HomePageComponent },
  { path: 'vehicles/:id', component: VehicleDetailsComponent },
  { path: 'vehicles', component: VehicleListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    VehicleListComponent,
    VehicleDetailsComponent,
    HomePageComponent,
    NewVehicleFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [provideClientHydration(), provideRouter(routes)],
  bootstrap: [AppComponent],
})
export class AppModule {}
