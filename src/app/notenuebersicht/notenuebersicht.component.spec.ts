import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotenuebersichtComponent } from './notenuebersicht.component';

describe('NotenuebersichtComponent', () => {
  let component: NotenuebersichtComponent;
  let fixture: ComponentFixture<NotenuebersichtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotenuebersichtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotenuebersichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
