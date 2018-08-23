import { TestBed, inject } from '@angular/core/testing';

import { BluechipFunctionsService } from './bluechip-functions.service';

describe('BluechipFunctionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BluechipFunctionsService]
    });
  });

  it('should be created', inject([BluechipFunctionsService], (service: BluechipFunctionsService) => {
    expect(service).toBeTruthy();
  }));
});
