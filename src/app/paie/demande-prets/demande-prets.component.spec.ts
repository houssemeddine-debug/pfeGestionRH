import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandePretsComponent } from './demande-prets.component';

describe('DemandePretsComponent', () => {
  let component: DemandePretsComponent;
  let fixture: ComponentFixture<DemandePretsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandePretsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandePretsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
