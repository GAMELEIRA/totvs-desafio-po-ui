import { CadastroTarefaService } from './cadastro-tarefa.service';
import { Status } from './../../enums/Status';
import { Categoria } from './../../enums/Categoria';
import { Component, OnInit } from '@angular/core';
import { Tarefa } from 'src/models/Tarefa';

@Component({
  selector: 'app-cadastro-tarefa',
  templateUrl: './cadastro-tarefa.component.html',
  styleUrls: ['./cadastro-tarefa.component.css']
})
export class CadastroTarefaComponent implements OnInit {

  public titulo: string;
  public descricao: string;
  public dataCriacao: Date;
  public dataInicio: Date;
  public dataFim: Date;
  public tipo: Categoria;
  public status: Status;

  constructor(private _cadastroTarefaService: CadastroTarefaService) { }

  ngOnInit(): void {
  }

  cadastrarTarefa(titulo: string, descricao: string, dataInicio: Date, dataFim: Date, tipo: Categoria, status: Status) {
    console.log(titulo, descricao, dataInicio, dataFim, tipo, status);
    this.dataCriacao = new Date();
    const tarefa = new Tarefa(titulo, descricao, this.dataCriacao, dataInicio, dataFim, tipo, status);
    this._cadastroTarefaService.cadastrarTarefa(tarefa);
  }

}
