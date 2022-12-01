import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsentTableComponent } from './consent-table.component';

describe('ConsentTableComponent', () => {
  let component: ConsentTableComponent;
  let fixture: ComponentFixture<ConsentTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsentTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
