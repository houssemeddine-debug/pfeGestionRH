import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuGestionnaireRhComponent } from './menu-gestionnaire-rh.component';

describe('MenuGestionnaireRhComponent', () => {
  let component: MenuGestionnaireRhComponent;
  let fixture: ComponentFixture<MenuGestionnaireRhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuGestionnaireRhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuGestionnaireRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
