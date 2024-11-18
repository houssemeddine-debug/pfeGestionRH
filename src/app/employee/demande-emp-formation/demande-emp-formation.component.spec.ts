import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeEmpFormationComponent } from './demande-emp-formation.component';

describe('DemandeEmpFormationComponent', () => {
  let component: DemandeEmpFormationComponent;
  let fixture: ComponentFixture<DemandeEmpFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeEmpFormationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandeEmpFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
