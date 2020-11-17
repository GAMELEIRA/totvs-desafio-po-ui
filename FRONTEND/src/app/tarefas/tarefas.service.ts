import { Pessoa } from 'src/models/Pessoa';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarefa } from 'src/models/Tarefa';
@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  public pessoa: Pessoa;
  private baseUrl = 'http://localhost:8080/pessoa';

  constructor(private http: HttpClient, private router: Router) { }

  buscarTarefas(): Observable<any> {
    console.log(this.pessoa);
    this.baseUrl = this.baseUrl.concat(`?credencial.email=${this.pessoa.credencial.email}`);
    this.baseUrl = this.baseUrl.concat(`&credencial.senha=${this.pessoa.credencial.senha}`);
    return this.http.get(this.baseUrl, { observe: "response" });
  }
}
