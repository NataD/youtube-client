import { TestBed } from '@angular/core/testing';

import { FilterListenersService } from './filter-listeners.service';

describe('FilterListenersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilterListenersService = TestBed.get(FilterListenersService);
    expect(service).toBeTruthy();
  });
});
