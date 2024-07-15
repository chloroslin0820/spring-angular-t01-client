import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AngularMaterialModule } from './Angular.MaterialModule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewAllPostsComponent } from './pages/view-all-posts/view-all-posts.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { ViewPostComponent } from './pages/view-post/view-post.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatePostComponent,
    ViewAllPostsComponent,
    HeaderComponent,
    FooterComponent,
    ViewPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
