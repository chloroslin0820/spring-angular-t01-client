import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Post, Comment } from '../../types';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommentService } from '../../services/comment.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrl: './view-post.component.scss',
})
export class ViewPostComponent {
  id = this.activatedRoute.snapshot.params['id'];
  postData!: Post;
  comments: Comment[] = [];
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
    this.postService.getPostById(this.id).subscribe((res: Post) => {
      this.postData = res;
      this.getCommentsByPostId();
    }),
      (error: HttpErrorResponse) => {
        this.matSnackBar.open('Failed to get post', 'Close', {
          duration: 2000,
        });
      };
  }

  likePost() {
    this.postService.likePost(this.id).subscribe((res: void) => {
      this.matSnackBar.open('Post liked successfully', 'Close', {
        duration: 2000,
      });
      this.getPostById();
    }),
      (error: HttpErrorResponse) => {
        this.matSnackBar.open('Failed to like post', 'Close', {
          duration: 2000,
        });
      };
  }

  publishComment() {
    const postedBy = this.commentForm.get('postedBy')?.value;
    const content = this.commentForm.get('content')?.value;

    this.commentService.createComment(this.id, postedBy, content).subscribe(
      (res: Comment[]) => {
        this.matSnackBar.open('Comment published successfully', 'Close', {
          duration: 2000,
        });
        this.getCommentsByPostId();
        this.commentForm.reset();
      },
      (error: HttpErrorResponse) => {
        this.matSnackBar.open('Failed to publish comment', 'Close', {
          duration: 2000,
        });
      }
    );
  }

  getCommentsByPostId() {
    this.commentService
      .getAllCommentsByPostId(this.id)
      .subscribe((res: Comment[]) => {
        this.comments = res;
      }),
      (error: any) => {
        this.matSnackBar.open('Failed to get comments', 'Close', {
          duration: 2000,
        });
      };
  }
}
