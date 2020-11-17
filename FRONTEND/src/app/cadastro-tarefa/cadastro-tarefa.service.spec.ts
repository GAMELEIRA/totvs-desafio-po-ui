import { TestBed } from '@angular/core/testing';

import { CadastroTarefaService } from './cadastro-tarefa.service';

describe('CadastroTarefaService', () => {
  let service: CadastroTarefaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroTarefaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
