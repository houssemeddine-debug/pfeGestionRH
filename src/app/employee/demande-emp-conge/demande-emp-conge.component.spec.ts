import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeEmpCongeComponent } from './demande-emp-conge.component';

describe('DemandeEmpCongeComponent', () => {
  let component: DemandeEmpCongeComponent;
  let fixture: ComponentFixture<DemandeEmpCongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeEmpCongeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandeEmpCongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
