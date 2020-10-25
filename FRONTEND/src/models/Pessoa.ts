import { Credencial } from './Credencial';
export class Pessoa {

  constructor(
    private readonly _id: number,
    public readonly nome: string,
    public readonly sobrenome: string,
    private readonly _credencial: Credencial) { }

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
