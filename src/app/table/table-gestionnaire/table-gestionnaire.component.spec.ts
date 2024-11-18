import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableGestionnaireComponent } from './table-gestionnaire.component';

describe('TableGestionnaireComponent', () => {
  let component: TableGestionnaireComponent;
  let fixture: ComponentFixture<TableGestionnaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableGestionnaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableGestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
