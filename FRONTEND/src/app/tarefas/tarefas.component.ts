import { Pessoa } from 'src/models/Pessoa';
import { TarefasService } from './tarefas.service';
import { Component, OnInit } from '@angular/core';
import { Tarefa } from 'src/models/Tarefa';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})

export class TarefasComponent implements OnInit {

  public tarefas: Tarefa = [];

  constructor(private tarefasService: TarefasService, private _router: Router) { }

  ngOnInit(): void {
    this.tarefasService.buscarTarefas().subscribe(res => {
      console.log(res.body);
      this.tarefas = res.body[0].tarefas;
    }, error => {
      alert("Estamos com problemas internos. Já estamos verificando isso. Qualquer dúvida entre em contato com o suporte.");
    });
  }

  navegarParaCadastroDeTarefas(): void {
    console.log(this.tarefas);
    this._router.navigate(["/cadastro-tarefas"]);
  }

}
