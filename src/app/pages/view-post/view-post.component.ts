import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Post } from '../../types';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrl: './view-post.component.scss'
})
export class ViewPostComponent {
  id = this.activatedRoute.snapshot.params['id'];
  postData!: Post;

  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
    private matSnackBar: MatSnackBar,
  ) {}

  ngOnInit() {
    this.getPostById();
  }

  getPostById() {
    this.postService.getPostById(this.id).subscribe((res: any) => {
      this.postData = res;
    }), (error: any) => {
      this.matSnackBar.open('Failed to get post', 'Close', {
        duration: 2000,
      });
    }
  }

  likePost() {
    this.postService.likePost(this.id).subscribe((res: any) => {

      this.matSnackBar.open('Post liked successfully', 'Close', { duration: 2000 });
      this.getPostById();
    }), (error: any) => {
      this.matSnackBar.open('Failed to like post', 'Close', {
        duration: 2000,
      });
    }
  }
}
