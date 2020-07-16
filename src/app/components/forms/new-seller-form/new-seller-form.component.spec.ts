import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSellerFormComponent } from './new-seller-form.component';

describe('NewSellerFormComponent', () => {
  let component: NewSellerFormComponent;
  let fixture: ComponentFixture<NewSellerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSellerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSellerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
