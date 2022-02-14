import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NovoUsuario } from './novo-usuario';

@Injectable({
  providedIn: 'root',
})
export class NovoUsuarioService {
  private url = 'http://localhost:3000/user/';

  constructor(private http: HttpClient) {}

  cadastraNovoUsuario(user: NovoUsuario): Observable<NovoUsuario> {
    return this.http.post<NovoUsuario>(this.url + 'signup', user);
  }

  getUser(nomeUsuario: string) {
    return this.http.get(`${this.url}exists/${nomeUsuario}`);
  }
}
