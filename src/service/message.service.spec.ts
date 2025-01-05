import { TestBed } from '@angular/core/testing';

import { MyMessageService } from './myMessage.service';

describe('MessageService', () => {
  let service: MyMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
