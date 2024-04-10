import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVehicleFormComponent } from './new-vehicle-form.component';

describe('NewVehicleFormComponent', () => {
  let component: NewVehicleFormComponent;
  let fixture: ComponentFixture<NewVehicleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewVehicleFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewVehicleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
