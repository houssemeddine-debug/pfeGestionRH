import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterPretComponent } from './consulter-pret.component';

describe('ConsulterPretComponent', () => {
  let component: ConsulterPretComponent;
  let fixture: ComponentFixture<ConsulterPretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterPretComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulterPretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
