import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportSuccrsalePaieComponent } from './rapport-succrsale-paie.component';

describe('RapportSuccrsalePaieComponent', () => {
  let component: RapportSuccrsalePaieComponent;
  let fixture: ComponentFixture<RapportSuccrsalePaieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RapportSuccrsalePaieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RapportSuccrsalePaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
