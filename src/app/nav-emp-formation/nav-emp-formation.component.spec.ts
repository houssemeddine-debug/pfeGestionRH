import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavEmpFormationComponent } from './nav-emp-formation.component';

describe('NavEmpFormationComponent', () => {
  let component: NavEmpFormationComponent;
  let fixture: ComponentFixture<NavEmpFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavEmpFormationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavEmpFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
