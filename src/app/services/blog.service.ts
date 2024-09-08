import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

export interface BlogPost {
  id: number;
  title: string;
  preview: string;
  content: string;
  image: string;
  author: string;
  authorImage: string;
  date: string;
  slug: string;
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private jsonUrl = '../../assets/data/articles.json';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<BlogPost[]> {
    return this.http.get<{ posts: BlogPost[] }>(this.jsonUrl).pipe(
      map(data => data.posts)
    );
  }

  getPost(slug: string): Observable<BlogPost | undefined> {
    return this.getPosts().pipe(
      map(posts => posts.find(post => post.slug === slug))
    );
  }
}
