import { TestBed } from '@angular/core/testing';

import { KursuebersichtService } from './kursuebersicht.service';

describe('KursuebersichtService', () => {
  let service: KursuebersichtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KursuebersichtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
