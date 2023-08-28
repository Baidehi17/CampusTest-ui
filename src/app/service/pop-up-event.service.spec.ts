import { TestBed } from '@angular/core/testing';

import { PopUpEventService } from './pop-up-event.service';

describe('PopUpEventService', () => {
  let service: PopUpEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopUpEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
