import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavTransfertComponent } from './nav-transfert.component';

describe('NavTransfertComponent', () => {
  let component: NavTransfertComponent;
  let fixture: ComponentFixture<NavTransfertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavTransfertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavTransfertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
