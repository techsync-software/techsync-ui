import { Component, OnInit, HostListener, Renderer2 } from '@angular/core';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule, ViewportScroller } from '@angular/common';
import { BlogComponent } from './components/blog/blog.component';
import { ContactModalComponent } from './components/contact-modal/contact-modal.component';
import { TranslatePipe } from '../pipes/translate.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuComponent, FooterComponent, CommonModule, BlogComponent, ContactModalComponent, TranslatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  showContactModal = false;
  animatedElements: Set<string> = new Set();

  constructor(
    private readonly viewportScroller: ViewportScroller,
    private readonly renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.observeElements();
  }

  private scrollThrottle: boolean = false;

  @HostListener('window:scroll')
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
    const elementsToAnimate = document.querySelectorAll('.service-card, .project-card, .blog-item, .accordion-card, .design-implement-item');
    elementsToAnimate.forEach(el => observer.observe(el));
  }

  private animateOnScroll(): void {
    const elements = document.querySelectorAll('.service-card, .project-card, .blog-item, .accordion-card, .design-implement-item');
    
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
      content: 'Nuestras soluciones están impulsadas por ideas creativas y un diseño innovador. Diseñamos productos digitales que conectan con tus usuarios y fortalecen tu marca en cada punto de contacto.',
      isOpen: true
    },
    {
      title: 'Experiencia en múltiples sectores',
      content: 'Hemos trabajado en plataformas utilizadas por empresas de retail, servicios, importación y distribución, tecnología y consultoría. Desde portales utilizados por más de 200 intermediarios hasta sistemas empresariales de alto tráfico.',
      isOpen: false
    },
    {
      title: 'Compromiso con la calidad y el acompañamiento',
      content: 'Más que entregar un producto, construimos relaciones de largo plazo. Acompañamos a tu equipo después del lanzamiento, optimizando, automatizando procesos y asegurando que la solución siga creciendo con tu negocio.',
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
