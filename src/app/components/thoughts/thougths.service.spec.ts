import { TestBed } from '@angular/core/testing';

import { ThougthsService } from './thougths.service';

describe('ThougthsService', () => {
  let service: ThougthsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThougthsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
