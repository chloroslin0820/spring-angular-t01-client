import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-posts-cards',
  templateUrl: './posts-cards.component.html',
  styleUrl: './posts-cards.component.scss'
})
export class PostsCardsComponent {
  @Input() post: any;
  breakpointObserverSubscription: Subscription | undefined;
  wordLimits = {
    xs: 100,
    sm: 220,
    md: 500,
    lg: 900,
  };
  currentWordLimit: number = this.wordLimits.md;

  constructor(
    private breakpointObserver: BreakpointObserver,
  ) {}

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
