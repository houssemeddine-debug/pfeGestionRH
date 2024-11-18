import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDirecteurComponent } from './menu-directeur.component';

describe('MenuDirecteurComponent', () => {
  let component: MenuDirecteurComponent;
  let fixture: ComponentFixture<MenuDirecteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuDirecteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuDirecteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
