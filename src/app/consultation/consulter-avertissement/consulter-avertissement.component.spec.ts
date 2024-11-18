import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterAvertissementComponent } from './consulter-avertissement.component';

describe('ConsulterAvertissementComponent', () => {
  let component: ConsulterAvertissementComponent;
  let fixture: ComponentFixture<ConsulterAvertissementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterAvertissementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulterAvertissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
