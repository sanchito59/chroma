import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMainBlurbComponent } from './display-main-blurb.component';

describe('DisplayMainBlurbComponent', () => {
  let component: DisplayMainBlurbComponent;
  let fixture: ComponentFixture<DisplayMainBlurbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayMainBlurbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayMainBlurbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
