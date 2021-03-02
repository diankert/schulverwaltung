import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WochenberichtComponent } from './wochenbericht.component';

describe('WochenberichtComponent', () => {
  let component: WochenberichtComponent;
  let fixture: ComponentFixture<WochenberichtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WochenberichtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WochenberichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
