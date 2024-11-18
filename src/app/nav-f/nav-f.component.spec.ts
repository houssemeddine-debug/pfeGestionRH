import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavFComponent } from './nav-f.component';

describe('NavFComponent', () => {
  let component: NavFComponent;
  let fixture: ComponentFixture<NavFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
