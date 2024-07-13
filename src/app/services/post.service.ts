import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'https://chloroslin-spring-angular-t01-server.onrender.com/';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  createNewPost(data: any): Observable<any> {
    return this.http.post<any>(API_URL + 'api/posts', data);
  }
}
