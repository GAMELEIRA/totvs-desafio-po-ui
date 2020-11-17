export class Credencial {
  private _id?: number;
  constructor(
    private _email: string,
    private _senha: string
  ) { }

  get id(): number {
    return this._id;
  }

  get email(): string {
    return this._email;
  }

  set email(emailNovo: string) {
    this._senha = emailNovo;
  }

  get senha(): string {
    return this._senha;
  }

  set senha(senhaNova: string) {
    this._senha = senhaNova;
  }

}
