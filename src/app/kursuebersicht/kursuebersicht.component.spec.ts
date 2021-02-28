import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KursuebersichtComponent } from './kursuebersicht.component';

describe('KursuebersichtComponent', () => {
  let component: KursuebersichtComponent;
  let fixture: ComponentFixture<KursuebersichtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KursuebersichtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KursuebersichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
