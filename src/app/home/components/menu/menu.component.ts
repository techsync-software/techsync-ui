import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isMenuOpen: boolean = false;
  isHeaderScrolled: boolean = false;

  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
    this.checkScroll();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.checkScroll();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  private checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isHeaderScrolled = scrollPosition > 100;
  }

  scrollToSection(sectionId: string): void {
    if(sectionId === 'footer') {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    } else {
      this.viewportScroller.scrollToAnchor(sectionId);
    }
  }
}
