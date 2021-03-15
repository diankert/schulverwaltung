import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuenUserAnlegenComponent } from './neuen-user-anlegen.component';

describe('NeuenUserAnlegenComponent', () => {
  let component: NeuenUserAnlegenComponent;
  let fixture: ComponentFixture<NeuenUserAnlegenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeuenUserAnlegenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeuenUserAnlegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
