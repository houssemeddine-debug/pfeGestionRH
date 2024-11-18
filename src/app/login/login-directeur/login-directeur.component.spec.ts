import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDirecteurComponent } from './login-directeur.component';

describe('LoginDirecteurComponent', () => {
  let component: LoginDirecteurComponent;
  let fixture: ComponentFixture<LoginDirecteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginDirecteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginDirecteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
