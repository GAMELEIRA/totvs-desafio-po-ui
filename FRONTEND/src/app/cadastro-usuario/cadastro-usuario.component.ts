import { CadastroUsuarioService } from './cadastro-usuario.service';
import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/models/Pessoa';
import { Credencial } from 'src/models/Credencial';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  public nome: string;
  public sobrenome: string;
  public email: string;
  public senha: string;

  constructor(private pessoaService: CadastroUsuarioService) {
  }

  ngOnInit(): void {
  }

  criarPessoa(nome: string, sobrenome: string, email: string, senha: string): void {
    const credencial: Credencial = new Credencial( email, senha );
    const pessoa: Pessoa = new Pessoa(nome, sobrenome, credencial);
    this.pessoaService.criarPessoa(pessoa);
  }

}
