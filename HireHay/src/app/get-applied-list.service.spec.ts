import { TestBed } from '@angular/core/testing';

import { GetAppliedListService } from './get-applied-list.service';

describe('GetAppliedListService', () => {
  let service: GetAppliedListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAppliedListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
