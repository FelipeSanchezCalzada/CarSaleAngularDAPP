import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllVehiclesTableComponent } from './all-vehicles-table.component';

describe('AllVehiclesTableComponent', () => {
  let component: AllVehiclesTableComponent;
  let fixture: ComponentFixture<AllVehiclesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllVehiclesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllVehiclesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
