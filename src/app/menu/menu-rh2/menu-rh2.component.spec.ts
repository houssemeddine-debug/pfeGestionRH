import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuRh2Component } from './menu-rh2.component';

describe('MenuRh2Component', () => {
  let component: MenuRh2Component;
  let fixture: ComponentFixture<MenuRh2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuRh2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuRh2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
