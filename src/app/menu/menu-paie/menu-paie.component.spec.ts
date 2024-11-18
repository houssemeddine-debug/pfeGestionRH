import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPaieComponent } from './menu-paie.component';

describe('MenuPaieComponent', () => {
  let component: MenuPaieComponent;
  let fixture: ComponentFixture<MenuPaieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuPaieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuPaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
