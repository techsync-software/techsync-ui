import { Component } from '@angular/core';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule, ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuComponent, FooterComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private viewportScroller: ViewportScroller) {}

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
