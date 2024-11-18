import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportIndivPaieComponent } from './rapport-indiv-paie.component';

describe('RapportIndivPaieComponent', () => {
  let component: RapportIndivPaieComponent;
  let fixture: ComponentFixture<RapportIndivPaieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RapportIndivPaieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RapportIndivPaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
