import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PostService } from '../../services/post.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
import { Post } from '../../types';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-view-all-posts',
  templateUrl: './view-all-posts.component.html',
  styleUrl: './view-all-posts.component.scss'
})
export class ViewAllPostsComponent implements OnInit {
  allPosts: Post[] = [];
  breakpointObserverSubscription: Subscription | undefined;
  wordLimits = {
    xs: 100,
    sm: 220,
    md: 500,
    lg: 900,
  };
  currentWordLimit: number = this.wordLimits.md;
  
  constructor(
    private ps: PostService,
    private snackBar: MatSnackBar,
    private breakpointObserver: BreakpointObserver,
    private cdr: ChangeDetectorRef,
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
    this.cdr.detectChanges();
  }

  ngAfterViewInit(): void {
    this.observeScreenSizeChanges();
  }

  private observeScreenSizeChanges(): void {
    this.breakpointObserverSubscription = this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large
    ]).subscribe(result => {
      if (result.matches) {
        this.setWordLimit(result.breakpoints);
      }
    });
  }

  private setWordLimit(breakpoints: any): void {
    if (breakpoints[Breakpoints.XSmall]) {
      this.currentWordLimit = this.wordLimits.xs;
    } else if (breakpoints[Breakpoints.Small]) {
      this.currentWordLimit = this.wordLimits.sm;
    } else if (breakpoints[Breakpoints.Medium]) {
      this.currentWordLimit = this.wordLimits.md;
    } else if (breakpoints[Breakpoints.Large]) {
      this.currentWordLimit = this.wordLimits.lg;
    }
  }
  
}
