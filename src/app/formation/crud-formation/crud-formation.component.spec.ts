import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudFormationComponent } from './crud-formation.component';

describe('CrudFormationComponent', () => {
  let component: CrudFormationComponent;
  let fixture: ComponentFixture<CrudFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudFormationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
