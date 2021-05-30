import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFullwidthSectionComponent } from './display-fullwidth-section.component';

describe('DisplayFullwidthSectionComponent', () => {
  let component: DisplayFullwidthSectionComponent;
  let fixture: ComponentFixture<DisplayFullwidthSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayFullwidthSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayFullwidthSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
