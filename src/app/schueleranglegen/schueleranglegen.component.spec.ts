import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchueleranglegenComponent } from './schueleranglegen.component';

describe('SchueleranglegenComponent', () => {
  let component: SchueleranglegenComponent;
  let fixture: ComponentFixture<SchueleranglegenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchueleranglegenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchueleranglegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
