import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabSuccrsalComponent } from './tab-succrsal.component';

describe('TabSuccrsalComponent', () => {
  let component: TabSuccrsalComponent;
  let fixture: ComponentFixture<TabSuccrsalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabSuccrsalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabSuccrsalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
