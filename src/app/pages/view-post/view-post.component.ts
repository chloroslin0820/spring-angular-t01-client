import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Post } from '../../types';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrl: './view-post.component.scss',
})
export class ViewPostComponent {
  id = this.activatedRoute.snapshot.params['id'];
  postData!: Post;
  commentForm: FormGroup = new FormGroup({});

  constructor(
    private postService: PostService,
    private commentService: CommentService,
    private activatedRoute: ActivatedRoute,
    private matSnackBar: MatSnackBar,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.getPostById();

    this.commentForm = this.fb.group({
      postedBy: [null, Validators.required],
      content: [null, Validators.required],
    });
  }

  getPostById() {
    this.postService.getPostById(this.id).subscribe((res: any) => {
      this.postData = res;
    }),
      (error: any) => {
        this.matSnackBar.open('Failed to get post', 'Close', {
          duration: 2000,
        });
      };
  }

  likePost() {
    this.postService.likePost(this.id).subscribe((res: any) => {
      this.matSnackBar.open('Post liked successfully', 'Close', {
        duration: 2000,
      });
      this.getPostById();
    }),
      (error: any) => {
        this.matSnackBar.open('Failed to like post', 'Close', {
          duration: 2000,
        });
      };
  }

  publishComment() {
    const postedBy = this.commentForm.get('postedBy')?.value;
    const content = this.commentForm.get('content')?.value;

    this.commentService.createComment(this.id, postedBy, content).subscribe(
      (res: any) => {
        this.matSnackBar.open('Comment published successfully', 'Close', {
          duration: 2000,
        });
        this.commentForm.reset();
      },
      (error: any) => {
        this.matSnackBar.open('Failed to publish comment', 'Close', {
          duration: 2000,
        });
      }
    );
  }
}
