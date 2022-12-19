import { TestBed } from '@angular/core/testing';

import { NgxSimpleWidgetsService } from './ngx-simple-widgets.service';

describe('NgxSimpleWidgetsService', () => {
  let service: NgxSimpleWidgetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxSimpleWidgetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
