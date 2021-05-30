import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayHeaderBannerComponent } from './display-header-banner.component';

describe('DisplayHeaderBannerComponent', () => {
  let component: DisplayHeaderBannerComponent;
  let fixture: ComponentFixture<DisplayHeaderBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayHeaderBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayHeaderBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
