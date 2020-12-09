import { TestBed } from '@angular/core/testing';

import { AuctionsResolver } from './auctions.resolver';

describe('AuctionsResolver', () => {
  let resolver: AuctionsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AuctionsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
