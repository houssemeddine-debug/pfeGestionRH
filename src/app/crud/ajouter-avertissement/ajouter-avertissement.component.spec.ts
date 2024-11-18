import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterAvertissementComponent } from './ajouter-avertissement.component';

describe('AjouterAvertissementComponent', () => {
  let component: AjouterAvertissementComponent;
  let fixture: ComponentFixture<AjouterAvertissementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterAvertissementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterAvertissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
