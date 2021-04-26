import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalColorDisplayComponent } from './vertical-color-display.component';

describe('VerticalColorDisplayComponent', () => {
  let component: VerticalColorDisplayComponent;
  let fixture: ComponentFixture<VerticalColorDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticalColorDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalColorDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
