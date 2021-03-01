import { TestBed } from '@angular/core/testing';

import { NotenuebersichService } from './notenuebersich.service';

describe('NotenuebersichService', () => {
  let service: NotenuebersichService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotenuebersichService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
