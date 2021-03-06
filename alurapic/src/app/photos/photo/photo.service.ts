import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Photo, Photos } from './photo';
import { PhotoComment } from './photo-comment';

const API = environment.ApiUrl;

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(private readonly http: HttpClient) {}

  listFromUser(userName: string): Observable<Photos> {
    return this.http.get<Photos>(`${API}${userName}/photos`);
  }

  listFromUserPaginated(userName: string, page: number): Observable<Photos> {
    const params = new HttpParams().append('page', page.toString());

    return this.http.get<Photos>(`${API}${userName}/photos`, { params });
  }

  upload(description: string, allowComments: boolean, file: File) {
    const formData = new FormData();
    formData.append('description', description);
    formData.append('allowComments', allowComments ? 'true' : 'false');
    formData.append('imageFile', file);
    return this.http.post(API + 'photos/upload', formData, {
      observe: 'events',
      reportProgress: true,
    });
  }

  findById(id: number): Observable<Photo> {
    return this.http.get<Photo>(API + 'photos/' + id);
  }

  getComments(id: number): Observable<PhotoComment[]> {
    return this.http.get<PhotoComment[]>(API + 'photos/' + id + '/comments');
  }

  addComment(photoId: number, commentText: string) {
    return this.http.post<PhotoComment[]>(
      API + 'photos/' + photoId + '/comments',
      { commentText }
    );
  }

  removePhoto(photoId: number) {
    return this.http.delete(API + 'photos/' + photoId);
  }

  like(photoId: number) {
    return this.http
      .post(API + 'photos/' + photoId + '/like', {}, { observe: 'response' })
      .pipe(map(() => true))
      .pipe(
        catchError((err) => {
          return err.status == '304' ? of(false) : throwError(() => err);
        })
      );
  }
}
