import { Component } from '@angular/core';
import { Post } from '../../types';
import { PostService } from '../../services/post.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-search-posts-by-name',
  templateUrl: './search-posts-by-name.component.html',
  styleUrl: './search-posts-by-name.component.scss',
})
export class SearchPostsByNameComponent {
  result: Post[] = [];
  name: string = '';

  constructor(
    private postService: PostService,
    private matSnackBar: MatSnackBar
  ) {}

  searchPostsByName() {
    if (this.name.trim() !== '') {
      this.postService.searchPostsByName(this.name).subscribe(
        (res: Post[]) => {
          this.result = res;
        },
        (error: HttpErrorResponse) => {
          this.matSnackBar.open(
            'An error occurred while searching for posts by name',
            'Close',
            {
              duration: 3000,
            }
          );
        }
      );
    }
  }
}
