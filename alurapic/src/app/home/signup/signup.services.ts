import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
export class SignupService {
  constructor(private readonly http: HttpClient) {}

  checkUserNameTaken(userName: String): Observable<any> {
    return this.http.get(API_URL + '/user/exists/' + userName);
  }
}
