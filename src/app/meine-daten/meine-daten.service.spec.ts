import { TestBed } from '@angular/core/testing';

import { MeineDatenService } from './meine-daten.service';

describe('MeineDatenService', () => {
  let service: MeineDatenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeineDatenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
