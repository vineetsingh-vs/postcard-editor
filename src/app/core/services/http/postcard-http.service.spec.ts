import { TestBed } from '@angular/core/testing';

import { PostcardHttpService } from './postcard-http.service';

describe('PostcardHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostcardHttpService = TestBed.get(PostcardHttpService);
    expect(service).toBeTruthy();
  });
});
