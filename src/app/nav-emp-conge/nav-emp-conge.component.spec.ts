import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavEmpCongeComponent } from './nav-emp-conge.component';

describe('NavEmpCongeComponent', () => {
  let component: NavEmpCongeComponent;
  let fixture: ComponentFixture<NavEmpCongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavEmpCongeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavEmpCongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
