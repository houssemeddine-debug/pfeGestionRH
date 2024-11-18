import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PretPaieComponent } from './pret-paie.component';

describe('PretPaieComponent', () => {
  let component: PretPaieComponent;
  let fixture: ComponentFixture<PretPaieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PretPaieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PretPaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
