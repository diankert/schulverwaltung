import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WochenberichtAlternativComponent } from './wochenbericht-alternativ.component';

describe('WochenberichtAlternativComponent', () => {
  let component: WochenberichtAlternativComponent;
  let fixture: ComponentFixture<WochenberichtAlternativComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WochenberichtAlternativComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WochenberichtAlternativComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
