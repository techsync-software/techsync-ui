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
  public likes: number = 0;
  public isLiked: boolean = false;

  constructor(private route: ActivatedRoute, private blogService: BlogService) {}

  public ngOnInit(): void {
    const postSlug = this.route.snapshot.paramMap.get('slug')!;
    this.blogService.getPost(postSlug).subscribe(post => {
      this.post = post;
      this.likes = Math.floor(Math.random() * 100);
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
