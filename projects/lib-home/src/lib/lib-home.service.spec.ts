import { TestBed } from '@angular/core/testing';

import { LibHomeService } from './lib-home.service';

describe('LibHomeService', () => {
  let service: LibHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
