import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL =
  environment.API_URL ||
  environment.API_DEV_URL;

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private http: HttpClient) {}

  createComment(id: number, postedBy: string, content: string): Observable<any> {
    const params = { 
      postId: id,
      postedBy: postedBy,
    };

    return this.http.post<Comment>(API_URL + 'api/comments/create', content, { params });
  }

  getAllCommentsByPostId(postId: number): Observable<any> {
    return this.http.get<Comment[]>(API_URL + 'api/comments/' + postId);
  }
}
