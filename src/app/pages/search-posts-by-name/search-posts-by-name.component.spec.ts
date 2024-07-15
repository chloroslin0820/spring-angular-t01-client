import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPostsByNameComponent } from './search-posts-by-name.component';

describe('SearchPostsByNameComponent', () => {
  let component: SearchPostsByNameComponent;
  let fixture: ComponentFixture<SearchPostsByNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchPostsByNameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchPostsByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
