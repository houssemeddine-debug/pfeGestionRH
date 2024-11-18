import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterTransfertComponent } from './consulter-transfert.component';

describe('ConsulterTransfertComponent', () => {
  let component: ConsulterTransfertComponent;
  let fixture: ComponentFixture<ConsulterTransfertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterTransfertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulterTransfertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
