import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalairePaieComponent } from './salaire-paie.component';

describe('SalairePaieComponent', () => {
  let component: SalairePaieComponent;
  let fixture: ComponentFixture<SalairePaieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalairePaieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalairePaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
