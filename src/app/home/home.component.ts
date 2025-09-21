import { Component, OnInit, HostListener } from '@angular/core';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule, ViewportScroller } from '@angular/common';
import { BlogComponent } from './components/blog/blog.component';
import { ContactModalComponent } from './components/contact-modal/contact-modal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuComponent, FooterComponent, CommonModule, BlogComponent, ContactModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  showContactModal = false;
  animatedElements: Set<string> = new Set();

  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
    this.observeElements();
  }

  private scrollThrottle: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    if (!this.scrollThrottle) {
      this.scrollThrottle = true;
      requestAnimationFrame(() => {
        this.animateOnScroll();
        this.scrollThrottle = false;
      });
    }
  }

  private observeElements(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          element.classList.add('animate-in');
          this.animatedElements.add(element.id || element.className);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observar elementos que necesitan animación
    const elementsToAnimate = document.querySelectorAll('.service-card, .project-card, .blog-item, .accordion-card');
    elementsToAnimate.forEach(el => observer.observe(el));
  }

  private animateOnScroll(): void {
    const elements = document.querySelectorAll('.service-card, .project-card, .blog-item, .accordion-card');
    
    elements.forEach((element, index) => {
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
      
      if (isVisible && !this.animatedElements.has(element.id || element.className)) {
        // Usar requestAnimationFrame para mejor performance
        requestAnimationFrame(() => {
          element.classList.add('animate-in');
          this.animatedElements.add(element.id || element.className);
        });
      }
    });
  }

  accordionItems = [
    {
      title: 'Innovación y Creatividad en el Diseño',
      content: 'Nuestras soluciones están impulsadas por ideas creativas y un diseño innovador. No solo buscamos satisfacer las necesidades actuales de tu negocio, sino anticiparnos a las futuras, asegurando que tu empresa destaque en un mercado competitivo.',
      isOpen: true
    },
    {
      title: 'Compromiso con la Calidad',
      content: 'Nos distinguimos por entregar soluciones de la más alta calidad, asegurando que cada proyecto cumpla con los estándares más exigentes. Nuestra dedicación a la excelencia se refleja en cada detalle del trabajo que realizamos.',
      isOpen: false
    }
  ];

  toggleItem(index: number): void {
    this.accordionItems[index].isOpen = !this.accordionItems[index].isOpen;
  }

  scrollToSection(sectionId: string): void {
    if(sectionId === 'contactanos') {
      this.showContactModal = true;
    } else if(sectionId === 'footer') {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    } else {
      this.viewportScroller.scrollToAnchor(sectionId);
    }
  }

  onCloseContactModal(): void {
    this.showContactModal = false;
  }
}
