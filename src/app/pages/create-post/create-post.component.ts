import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Post } from '../../types';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.scss'
})
export class CreatePostComponent {

  postForm: FormGroup = new FormGroup({});
  tags: string[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private postService: PostService,
  ) {}

  ngOnInit() {
    this.postForm = this.fb.group({
      name: [null, Validators.required],
      content: [null, [Validators.required, Validators.maxLength(5000)]],
      img: [null],
      postedBy: [null, Validators.required]
    });
  }

  addTag(event: any) {
    const value = (event.value || '').trim();

    if (value && !this.tags.includes(value)) {
      this.tags.push(value);
      event.input.value = '';
    }
  }

  removeTag(tag: string) {
    const index: number = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  createPost() {
    const data: Post = this.postForm.value;
    data.tags = this.tags;

    this.postService.createNewPost(data).subscribe(
      (res) => {
        this.snackBar.open('Post created successfully!!!!', 'Close', {
          duration: 3000,
        });
        this.router.navigateByUrl('/');
      },
      (error: HttpErrorResponse | Error) => {
        this.snackBar.open('An error occurred while creating the post', 'Close', {
          duration: 3000,
        });
      }
    );
  }
}
