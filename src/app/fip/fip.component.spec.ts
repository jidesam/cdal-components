import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FipComponent } from './fip.component';

describe('FipComponent', () => {
  let component: FipComponent;
  let fixture: ComponentFixture<FipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
