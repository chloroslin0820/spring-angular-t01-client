import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
import { Post } from '../../types';

@Component({
  selector: 'app-view-all-posts',
  templateUrl: './view-all-posts.component.html',
  styleUrl: './view-all-posts.component.scss'
})
export class ViewAllPostsComponent implements OnInit {
  allPosts: Post[] = [];
  
  constructor(
    private ps: PostService,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts() {
    this.ps.getAllPosts().subscribe((res) => {
      this.allPosts = res;
    }),
    (err: HttpErrorResponse | Error) => {
      this.snackBar.open('Error fetching posts', 'Close')
    };
  }
  
}
