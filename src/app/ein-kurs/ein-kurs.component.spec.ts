import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EinKursComponent } from './ein-kurs.component';

describe('EinKursComponent', () => {
  let component: EinKursComponent;
  let fixture: ComponentFixture<EinKursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EinKursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EinKursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
