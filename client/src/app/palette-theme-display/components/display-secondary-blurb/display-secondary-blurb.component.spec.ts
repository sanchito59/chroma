import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySecondaryBlurbComponent } from './display-secondary-blurb.component';

describe('DisplaySecondaryBlurbComponent', () => {
  let component: DisplaySecondaryBlurbComponent;
  let fixture: ComponentFixture<DisplaySecondaryBlurbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaySecondaryBlurbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaySecondaryBlurbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
