import { TarefasService } from './../tarefas/tarefas.service';
import { Pessoa } from 'src/models/Pessoa';
import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { Credencial } from 'src/models/Credencial';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public senha: string;

  constructor(private _loginService: LoginService, private _tarefasService: TarefasService, private _router: Router) { }

  ngOnInit(): void {
  }

  realizarAcesso(email: string, senha: string) {
    const credencial: Credencial = new Credencial(email, senha);
    const usuario: Pessoa = new Pessoa('', '', credencial);
    this._tarefasService.pessoa = usuario;
    this._loginService.realizarAcesso(email, senha).subscribe(res => {
      if (res.body.length !== 0) {
        this._router.navigate(['/tarefas']);
      } else {
        alert("Usuário não identificado!");
      }
    }, error => {
      alert("Identificamos que sua aplicação está com problemas. Estamos resolvendo esses problemas e logo você terá acesso novamente.");
    });
  }

}
