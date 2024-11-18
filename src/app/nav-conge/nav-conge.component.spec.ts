import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCongeComponent } from './nav-conge.component';

describe('NavCongeComponent', () => {
  let component: NavCongeComponent;
  let fixture: ComponentFixture<NavCongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavCongeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavCongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
