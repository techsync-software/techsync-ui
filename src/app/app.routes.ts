import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogPostComponent } from './home/components/blog-post/blog-post.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog/:slug', component: BlogPostComponent }
];
