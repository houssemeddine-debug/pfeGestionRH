import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudCongeComponent } from './crud-conge.component';

describe('CrudCongeComponent', () => {
  let component: CrudCongeComponent;
  let fixture: ComponentFixture<CrudCongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudCongeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudCongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
