import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transferencia } from '../model/transferencia';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private listaTrasferencia: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.listaTrasferencia = [];
  }

  get transferencias() {
    return this.listaTrasferencia;
  }

  adiciona(transferencia: any): Observable<Transferencia> {
    this.hidratar(transferencia);
    return this.httpClient.post<Transferencia>(this.url, transferencia);
  }

  todas(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  private hidratar(transferencia: any) {
    transferencia.data = new Date();
  }
}
