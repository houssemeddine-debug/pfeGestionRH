import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPaieComponent } from './login-paie.component';

describe('LoginPaieComponent', () => {
  let component: LoginPaieComponent;
  let fixture: ComponentFixture<LoginPaieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginPaieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginPaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
