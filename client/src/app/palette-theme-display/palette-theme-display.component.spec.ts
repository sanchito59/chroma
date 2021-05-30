import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaletteThemeDisplayComponent } from './palette-theme-display.component';

describe('PaletteThemeDisplayComponent', () => {
  let component: PaletteThemeDisplayComponent;
  let fixture: ComponentFixture<PaletteThemeDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaletteThemeDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaletteThemeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
