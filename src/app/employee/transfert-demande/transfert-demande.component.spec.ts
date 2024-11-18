import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransfertDemandeComponent } from './transfert-demande.component';

describe('TransfertDemandeComponent', () => {
  let component: TransfertDemandeComponent;
  let fixture: ComponentFixture<TransfertDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransfertDemandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransfertDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
