import { Tarefa } from './Tarefa';
import { Credencial } from './Credencial';
export class Pessoa {

  private _id?: number;
  public tarefas?: Array<Tarefa>;

  constructor(
    public nome?: string,
    public sobrenome?: string,
    public credencial?: Credencial) { }

  public visualizarEmail(): string {
    return this.credencial.email;
  }

  public trocarEmail(emailNovo: string) {
    this.credencial.email = emailNovo;
  }

  public visualizarSenha(): string {
    return this.credencial.senha;
  }

  public trocarSenha(senhaNova: string) {
    this.credencial.senha = senhaNova;
  }

}
