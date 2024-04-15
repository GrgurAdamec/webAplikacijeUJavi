import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpiryDateListComponent } from './expiry-date-list.component';

describe('ExpiryDateListComponent', () => {
  let component: ExpiryDateListComponent;
  let fixture: ComponentFixture<ExpiryDateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpiryDateListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpiryDateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
