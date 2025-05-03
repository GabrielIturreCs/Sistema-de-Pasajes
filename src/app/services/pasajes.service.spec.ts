/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { PasajesService } from './pasajes.service';

describe('Service: Pasajes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PasajesService]
    });
  });

  it('should ...', inject([PasajesService], (service: PasajesService) => {
    expect(service).toBeTruthy();
  }));
});
