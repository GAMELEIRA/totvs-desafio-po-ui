import { Status } from '../enums/Status';
import { Categoria } from '../enums/Categoria';
export class Tarefa {
  constructor(
    private readonly _id: number,
    public titulo: string,
    public descricao: string,
    private readonly _dataCriacao: Date,
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
