import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo, Photos } from './photo';
import { PhotoComment } from './photo-comment';

const API = 'http://localhost:3000/';

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
    return this.http.post(API + 'photos/upload', formData);
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
}
