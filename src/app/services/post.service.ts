import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

const API_URL = 
  // environment.API_URL ||
   environment.API_DEV_URL;

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  createNewPost(data: any): Observable<any> {
    return this.http.post<any>(API_URL + 'api/posts', data);
  }

  getAllPosts(): Observable<any> {
    return this.http.get<any>(API_URL + 'api/posts');
  }
}
