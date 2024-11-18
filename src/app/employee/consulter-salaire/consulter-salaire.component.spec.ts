import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterSalaireComponent } from './consulter-salaire.component';

describe('ConsulterSalaireComponent', () => {
  let component: ConsulterSalaireComponent;
  let fixture: ComponentFixture<ConsulterSalaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterSalaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulterSalaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
