import { TestBed, inject } from '@angular/core/testing';

import { TiendasService } from './tiendas.service';

describe('TiendasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TiendasService]
    });
  });

  it('should be created', inject([TiendasService], (service: TiendasService) => {
    expect(service).toBeTruthy();
  }));
});
