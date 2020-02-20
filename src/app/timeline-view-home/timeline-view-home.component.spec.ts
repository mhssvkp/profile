import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineViewHomeComponent } from './timeline-view-home.component';

describe('TimelineViewHomeComponent', () => {
  let component: TimelineViewHomeComponent;
  let fixture: ComponentFixture<TimelineViewHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineViewHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineViewHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
