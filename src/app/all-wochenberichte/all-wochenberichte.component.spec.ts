import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllWochenberichteComponent } from './all-wochenberichte.component';

describe('AllWochenberichteComponent', () => {
  let component: AllWochenberichteComponent;
  let fixture: ComponentFixture<AllWochenberichteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllWochenberichteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllWochenberichteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
