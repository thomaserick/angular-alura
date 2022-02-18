import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API = environment.api;

@Injectable({
  providedIn: 'root',
})
export class AcoesService {
  constructor(private readonly http: HttpClient) {}

  getAcoes() {
    return this.http.get<any>(`${API}/acoes`);
  }
}
