import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminansichtComponent } from './adminansicht.component';

describe('AdminansichtComponent', () => {
  let component: AdminansichtComponent;
  let fixture: ComponentFixture<AdminansichtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminansichtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminansichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
