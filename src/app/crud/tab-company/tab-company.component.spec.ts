import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabCompanyComponent } from './tab-company.component';

describe('TabCompanyComponent', () => {
  let component: TabCompanyComponent;
  let fixture: ComponentFixture<TabCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabCompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
