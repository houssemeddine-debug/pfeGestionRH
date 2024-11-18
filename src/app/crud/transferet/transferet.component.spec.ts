import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferetComponent } from './transferet.component';

describe('TransferetComponent', () => {
  let component: TransferetComponent;
  let fixture: ComponentFixture<TransferetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
