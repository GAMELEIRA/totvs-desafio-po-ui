import { Credencial } from 'src/models/Credencial';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pessoa } from 'src/models/Pessoa';

@Injectable({
  providedIn: 'root'
})
export class CadastroUsuarioService {

  private baseUrl = 'http://localhost:8080/pessoa';

  constructor(private http: HttpClient, private router: Router) { }

  criarPessoa(pessoa: Pessoa): void {
    this.http.post<Pessoa>(this.baseUrl, pessoa).subscribe(res => {
      this.router.navigate(['/acesso']);
      alert("Usuário cadastrado!");
    }, error => {
      alert("Usuário não cadastrado!");
    });
  }

}
