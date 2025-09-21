import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BlogPost, BlogService } from '../../../services/blog.service';
import { CommonModule } from '@angular/common';
import { MenuComponent } from "../menu/menu.component";
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [CommonModule, MenuComponent, MenuComponent, RouterLink, FooterComponent],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.scss'
})
export class BlogPostComponent implements OnInit {
  public post: BlogPost | undefined;
  public otherArticles: BlogPost[] = [];
  public likes: number = 0;
  public isLiked: boolean = false;
  public isLoading: boolean = true;

  constructor(private route: ActivatedRoute, private blogService: BlogService) {}

  public ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const postSlug = params.get('slug')!;
      this.loadPost(postSlug);
    });
  }

  private loadPost(postSlug: string): void {
    this.isLoading = true;
    this.blogService.getPost(postSlug).subscribe(post => {
      this.post = post;
      this.likes = Math.floor(Math.random() * 100);
      
      // Obtener otros artículos (excluyendo el actual)
      this.blogService.getPosts().subscribe(posts => {
        this.otherArticles = posts
          .filter(p => p.slug !== postSlug)
          .slice(0, 3); // Mostrar máximo 3 artículos
        
        // Simular tiempo de carga para mejor UX
        setTimeout(() => {
          this.isLoading = false;
        }, 800);
      });
    });
  }

  public addLikes(): void {
    this.isLiked = !this.isLiked;
    if (this.isLiked) {
      this.likes++;
    } else {
      this.likes--;
    }
  }

  public shareOnLinkedIn(): void {
    const url = `https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&title=${this.post?.title}`;
    window.open(url, '_blank');
  }

  public shareOnFacebook(): void {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`;
    window.open(url, '_blank');
  }

  public shareOnWhatsApp(): void {
    const url = `https://api.whatsapp.com/send?text=${window.location.href}`;
    window.open(url, '_blank');
  }
}
