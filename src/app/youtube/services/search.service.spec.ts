import { TestBed } from '@angular/core/testing';

import { SeacrhService } from './search.service';

describe('SeacrhService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeacrhService = TestBed.get(SeacrhService);
    expect(service).toBeTruthy();
  });
});
