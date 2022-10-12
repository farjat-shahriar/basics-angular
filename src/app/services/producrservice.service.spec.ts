import { TestBed } from '@angular/core/testing';

import { ProducrserviceService } from './producrservice.service';

describe('ProducrserviceService', () => {
  let service: ProducrserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProducrserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
