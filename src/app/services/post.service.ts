import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { environment } from '../../environments/environment.development';
import { Post } from '../types';

const API_URL = 'https://chloroslin-spring-angular-t01-server.onrender.com/';
  // environment.API_URL ||
  // environment.API_DEV_URL;

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  createNewPost(data: Post): Observable<any> {
    return this.http.post<any>(API_URL + 'api/posts', data);
  }

  getAllPosts(): Observable<any> {
    return this.http.get<Post[]>(API_URL + 'api/posts');
  }

  getPostById(id: number): Observable<any> {
    return this.http.get<Post>(API_URL + 'api/posts/' + id);
  }

  likePost(id: number): Observable<any> {
    return this.http.put<Post>(API_URL + `api/posts/${id}/like`, {});
  }

  searchPostsByName(name: string): Observable<any> {
    return this.http.get<Post>(API_URL + 'api/posts/search/' + name);
  }
}
