import { TestBed } from '@angular/core/testing';

import { SchueleranlegenService } from './schueleranlegen.service';

describe('SchueleranlegenService', () => {
  let service: SchueleranlegenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchueleranlegenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
