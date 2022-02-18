import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, pluck } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Acao, AcoesAPI } from './modelo/acoes';

const API = environment.api;

@Injectable({
  providedIn: 'root',
})
export class AcoesService {
  constructor(private readonly http: HttpClient) {}

  getAcoes(valor?: string) {
    const params = valor ? new HttpParams().append('valor', valor) : undefined;

    return this.http.get<AcoesAPI>(`${API}/acoes`, { params }).pipe(
      pluck('payload'),
      map((acoes) =>
        acoes.sort((acaoA, acaoB) => this.ordenaPorCodigo(acaoA, acaoB))
      )
    );
  }

  private ordenaPorCodigo(acaoA: Acao, acaoB: Acao) {
    if (acaoA.codigo > acaoB.codigo) {
      return 1;
    } else if (acaoA.codigo < acaoB.codigo) {
      return -1;
    }

    return 0;
  }
}
