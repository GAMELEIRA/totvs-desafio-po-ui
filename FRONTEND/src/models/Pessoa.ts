import { Tarefa } from './Tarefa';
import { Credencial } from './Credencial';
export class Pessoa {

  constructor(
    private readonly _id: number,
    public nome: string,
    public sobrenome: string,
    private _credencial: Credencial,
    public tarefas: Array<Tarefa>) { }

  get id(): number {
    return this._id;
  }

  public visualizarEmail(): string {
    return this._credencial.email;
  }

  public trocarEmail(emailNovo: string) {
    this._credencial.email = emailNovo;
  }

  public visualizarSenha(): string {
    return this._credencial.senha;
  }

  public trocarSenha(senhaNova: string) {
    this._credencial.senha = senhaNova;
  }

}
