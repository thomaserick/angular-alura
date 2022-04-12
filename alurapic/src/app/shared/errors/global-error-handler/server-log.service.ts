import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ServerLog } from './serve-log';

const API_URL = environment.ServerLog;

@Injectable({
  providedIn: 'root',
})
export class ServerLogService {
  constructor(private readonly http: HttpClient) {}

  log(log: ServerLog) {
    return this.http.post<ServerLog>(API_URL + 'infra/log', log);
  }
}
