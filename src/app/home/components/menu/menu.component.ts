import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { TranslationService, LangCode } from '../../../services/translation.service';
import { TranslatePipe } from '../../../pipes/translate.pipe';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    TranslatePipe,
  ],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isMenuOpen: boolean = false;
  isHeaderScrolled: boolean = false;
  currentLang: LangCode = 'es';

  constructor(
    private readonly viewportScroller: ViewportScroller,
    private readonly translationService: TranslationService
  ) {}

  ngOnInit(): void {
    this.checkScroll();
    this.translationService.currentLang$.subscribe((lang: LangCode) => {
      this.currentLang = lang;
    });
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.checkScroll();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    const body = document.body;
    if (this.isMenuOpen) {
      body.classList.add('nav-active');
    } else {
      body.classList.remove('nav-active');
    }
  }

  private checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isHeaderScrolled = scrollPosition > 100;
  }

  scrollToSection(sectionId: string): void {
    if (this.isMenuOpen) {
      this.toggleMenu();
    }

    if(sectionId === 'footer') {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    } else {
      this.viewportScroller.scrollToAnchor(sectionId);
    }
  }

  changeLanguage(lang: LangCode): void {
    if (this.translationService.currentLang === lang) return;
    const body = document.body;
    body.classList.add('lang-transition');
    setTimeout(() => {
      this.translationService.setLanguage(lang);
      body.classList.remove('lang-transition');
    }, 250);
  }
}
