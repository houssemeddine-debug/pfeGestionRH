import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavPaieComponent } from './nav-paie.component';

describe('NavPaieComponent', () => {
  let component: NavPaieComponent;
  let fixture: ComponentFixture<NavPaieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavPaieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavPaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
