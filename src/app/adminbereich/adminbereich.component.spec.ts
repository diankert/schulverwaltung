import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbereichComponent } from './adminbereich.component';

describe('AdminbereichComponent', () => {
  let component: AdminbereichComponent;
  let fixture: ComponentFixture<AdminbereichComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminbereichComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbereichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
