import { TestBed } from '@angular/core/testing';

import { PostfachService } from './postfach.service';

describe('PostfachService', () => {
  let service: PostfachService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostfachService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
