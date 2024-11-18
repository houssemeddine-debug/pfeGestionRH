import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabPaieComponent } from './tab-paie.component';

describe('TabPaieComponent', () => {
  let component: TabPaieComponent;
  let fixture: ComponentFixture<TabPaieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabPaieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabPaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
