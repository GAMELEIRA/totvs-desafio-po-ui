import { Status } from '../enums/Status';
import { Categoria } from '../enums/Categoria';
export class Tarefa {
  private _id: number;
  constructor(
    public titulo: string,
    public descricao: string,
    private _dataCriacao: Date,
    public dataInicio: Date,
    public dataFim: Date,
    public categoria: Categoria,
    public status: Status
  ) {
    this._dataCriacao = new Date();
  }

  get id(): number {
    return this._id;
  }

  get dataCriacao(): Date {
    return this._dataCriacao;
  }

}
