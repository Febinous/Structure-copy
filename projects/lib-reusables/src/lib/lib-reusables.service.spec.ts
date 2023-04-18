import { TestBed } from '@angular/core/testing';

import { LibReusablesService } from './lib-reusables.service';

describe('LibReusablesService', () => {
  let service: LibReusablesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibReusablesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
