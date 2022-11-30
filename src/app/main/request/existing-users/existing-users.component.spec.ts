import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingUsersComponent } from './existing-users.component';

describe('ExistingUsersComponent', () => {
  let component: ExistingUsersComponent;
  let fixture: ComponentFixture<ExistingUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExistingUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExistingUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
