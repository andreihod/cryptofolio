import { TestBed, inject } from '@angular/core/testing';

import { GlobalEventsManager } from './global-events-manager.service';

describe('GlobalEventsManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalEventsManager]
    });
  });

  it('should be created', inject([GlobalEventsManager], (service: GlobalEventsManager) => {
    expect(service).toBeTruthy();
  }));
});
