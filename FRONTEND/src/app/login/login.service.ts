import { Observable } from 'rxjs';
import { Pessoa } from 'src/models/Pessoa';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'http://localhost:8080/pessoa';

  constructor(private http: HttpClient, private router: Router) { }

  realizarAcesso(email: string, senha: string): Observable<any> {
    const url = this.baseUrl.concat(`?credencial.email=${email}&credencial.senha=${senha}`);
    return this.http.get(url, { observe: 'response' });
  }

}
