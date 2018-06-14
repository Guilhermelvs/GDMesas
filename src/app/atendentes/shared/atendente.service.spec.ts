import { TestBed, inject } from '@angular/core/testing';

import { atendentesService } from './atendente.service';

describe('AtendenteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [atendentesService]
    });
  });

  it('should be created', inject([atendentesService], (service: atendentesService) => {
    expect(service).toBeTruthy();
  }));
});
