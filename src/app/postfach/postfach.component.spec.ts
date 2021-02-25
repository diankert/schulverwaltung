import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostfachComponent } from './postfach.component';

describe('PostfachComponent', () => {
  let component: PostfachComponent;
  let fixture: ComponentFixture<PostfachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostfachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostfachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
