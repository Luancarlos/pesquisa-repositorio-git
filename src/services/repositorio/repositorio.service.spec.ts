import { TestBed } from '@angular/core/testing';

import { RepositorioService } from './repositorio.service';

describe('RepositorioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RepositorioService = TestBed.get(RepositorioService);
    expect(service).toBeTruthy();
  });
});
