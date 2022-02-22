import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photos } from './photo';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(private readonly http: HttpClient) {}

  listFromUser(userName: string): Observable<Photos> {
    return this.http.get<Photos>('http://localhost:3000/flavio/photos');
  }
}
