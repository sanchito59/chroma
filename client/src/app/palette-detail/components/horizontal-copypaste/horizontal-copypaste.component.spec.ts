import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalCopypasteComponent } from './horizontal-copypaste.component';

describe('HorizontalCopypasteComponent', () => {
  let component: HorizontalCopypasteComponent;
  let fixture: ComponentFixture<HorizontalCopypasteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorizontalCopypasteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalCopypasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
