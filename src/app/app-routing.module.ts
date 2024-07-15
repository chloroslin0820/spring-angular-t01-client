import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { ViewAllPostsComponent } from './pages/view-all-posts/view-all-posts.component';
import { ViewPostComponent } from './pages/view-post/view-post.component';
import { SearchPostsByNameComponent } from './pages/search-posts-by-name/search-posts-by-name.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'create-post',
    component: CreatePostComponent
  },
  {
    path: 'view-all-posts',
    component: ViewAllPostsComponent
  },
  {
    path: 'view-post/:id',
    component: ViewPostComponent
  },
  {
    path: 'search-posts-by-name',
    component: SearchPostsByNameComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
