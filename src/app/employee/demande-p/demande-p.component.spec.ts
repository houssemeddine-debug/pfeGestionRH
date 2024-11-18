import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandePComponent } from './demande-p.component';

describe('DemandePComponent', () => {
  let component: DemandePComponent;
  let fixture: ComponentFixture<DemandePComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandePComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandePComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
