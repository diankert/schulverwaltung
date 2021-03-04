import { TestBed } from '@angular/core/testing';

import { WochenberichtService } from './wochenbericht.service';

describe('WochenberichtService', () => {
  let service: WochenberichtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WochenberichtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
