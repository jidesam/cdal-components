import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestCustomerDataComponent } from './request-customer-data.component';

describe('RequestCustomerDataComponent', () => {
  let component: RequestCustomerDataComponent;
  let fixture: ComponentFixture<RequestCustomerDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestCustomerDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestCustomerDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
