import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPersComponent } from './info-pers.component';

describe('InfoPersComponent', () => {
  let component: InfoPersComponent;
  let fixture: ComponentFixture<InfoPersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoPersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoPersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
