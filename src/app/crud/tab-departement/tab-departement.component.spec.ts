import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabDepartementComponent } from './tab-departement.component';

describe('TabDepartementComponent', () => {
  let component: TabDepartementComponent;
  let fixture: ComponentFixture<TabDepartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabDepartementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabDepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
