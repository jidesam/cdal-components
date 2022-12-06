import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiuComponent } from './fiu.component';

describe('FiuComponent', () => {
  let component: FiuComponent;
  let fixture: ComponentFixture<FiuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
