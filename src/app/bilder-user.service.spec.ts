import { TestBed } from '@angular/core/testing';

import { Bilder.UserService } from './bilder.user.service';

describe('Bilder.UserService', () => {
  let service: Bilder.UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Bilder.UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
