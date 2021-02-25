import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationenComponent } from './informationen.component';

describe('InformationenComponent', () => {
  let component: InformationenComponent;
  let fixture: ComponentFixture<InformationenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
