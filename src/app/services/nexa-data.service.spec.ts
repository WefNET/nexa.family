import { TestBed, inject } from '@angular/core/testing';

import { NexaDataService } from './nexa-data.service';

describe('NexaDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NexaDataService]
    });
  });

  it('should be created', inject([NexaDataService], (service: NexaDataService) => {
    expect(service).toBeTruthy();
  }));
});
