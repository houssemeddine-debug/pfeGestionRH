import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDepartementComponent } from './table-departement.component';

describe('TableDepartementComponent', () => {
  let component: TableDepartementComponent;
  let fixture: ComponentFixture<TableDepartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableDepartementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableDepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
