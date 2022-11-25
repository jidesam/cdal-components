import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradePlanCardComponent } from './upgrade-plan-card.component';

describe('UpgradePlanCardComponent', () => {
  let component: UpgradePlanCardComponent;
  let fixture: ComponentFixture<UpgradePlanCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpgradePlanCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpgradePlanCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
