import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOwnerFormComponent } from './new-owner-form.component';

describe('NewOwnerFormComponent', () => {
  let component: NewOwnerFormComponent;
  let fixture: ComponentFixture<NewOwnerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewOwnerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOwnerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
