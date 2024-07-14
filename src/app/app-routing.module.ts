import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { ViewAllPostsComponent } from './pages/view-all-posts/view-all-posts.component';

const routes: Routes = [
  {
    path: 'create-post',
    component: CreatePostComponent
  },
  {
    path: 'view-all-posts',
    component: ViewAllPostsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
