import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechProfilesComponent } from './tech-profiles.component';

describe('TechProfilesComponent', () => {
  let component: TechProfilesComponent;
  let fixture: ComponentFixture<TechProfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechProfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
