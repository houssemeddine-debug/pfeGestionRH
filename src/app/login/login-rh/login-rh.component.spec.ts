import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRhComponent } from './login-rh.component';

describe('LoginRhComponent', () => {
  let component: LoginRhComponent;
  let fixture: ComponentFixture<LoginRhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginRhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
