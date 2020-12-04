import { TestBed } from '@angular/core/testing';

import { PozoService } from './pozo.service';

describe('PozoService', () => {
  let service: PozoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PozoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
