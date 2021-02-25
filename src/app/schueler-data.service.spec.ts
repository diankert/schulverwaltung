import { TestBed } from '@angular/core/testing';

import { SchuelerDataService } from './schueler-data.service';

describe('SchuelerDataService', () => {
  let service: SchuelerDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchuelerDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
