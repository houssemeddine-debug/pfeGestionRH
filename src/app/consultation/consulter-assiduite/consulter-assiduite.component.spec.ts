import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterAssiduiteComponent } from './consulter-assiduite.component';

describe('ConsulterAssiduiteComponent', () => {
  let component: ConsulterAssiduiteComponent;
  let fixture: ComponentFixture<ConsulterAssiduiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterAssiduiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulterAssiduiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
