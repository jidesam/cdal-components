import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportFirstScreenComponent } from './report-first-screen.component';

describe('ReportFirstScreenComponent', () => {
  let component: ReportFirstScreenComponent;
  let fixture: ComponentFixture<ReportFirstScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportFirstScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportFirstScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
