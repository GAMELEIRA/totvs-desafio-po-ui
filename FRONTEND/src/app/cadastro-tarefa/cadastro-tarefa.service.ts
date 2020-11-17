import { TarefasService } from './../tarefas/tarefas.service';
import { Pessoa } from 'src/models/Pessoa';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Tarefa } from 'src/models/Tarefa';

@Injectable({
  providedIn: 'root'
})
export class CadastroTarefaService {

  private baseUrl = 'http://localhost:8080/pessoa';

  constructor(private _http: HttpClient, private _router: Router, private _tarefasService: TarefasService) { }

  cadastrarTarefa(tarefa: Tarefa): void {
    let url = this.baseUrl.concat(`?credencial.email=${this._tarefasService.pessoa.credencial.email}`);
    url = url.concat(`&credencial.senha=${this._tarefasService.pessoa.credencial.senha}`);

    this._http.get(url, { observe: 'response' }).subscribe((res) => {
      if (res.body[0].tarefas === undefined) {
        res.body[0].tarefas = [];
        res.body[0].tarefas.push(tarefa);
        console.log(res.body.tarefas);
        console.log("Não têm tarefas");
        console.log(res.body);
        this._http.put(this.baseUrl.concat('/').concat(res.body[0].id), res.body[0], {observe: 'body'}).subscribe(resp => {
          console.log(resp);
        });
      } else {
        res.body[0].tarefas.push(tarefa);
        console.log(res.body);
        this._http.put(this.baseUrl.concat('/').concat(res.body[0].id), res.body[0], { observe: 'response' }).subscribe(resp => {
          console.log(resp);
        });
        console.log("Têm tarefas");
      }
      console.log(res);
    });
  }

}
