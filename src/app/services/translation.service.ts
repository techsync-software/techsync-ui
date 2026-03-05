import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type LangCode = 'es' | 'en';

type Translations = Record<string, Record<LangCode, string>>;

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private readonly currentLangSubject = new BehaviorSubject<LangCode>('es');
  readonly currentLang$ = this.currentLangSubject.asObservable();

  private readonly translations: Translations = {
    'nav.home': { es: 'Inicio', en: 'Home' },
    'nav.about': { es: 'Nosotros', en: 'About' },
    'nav.projects': { es: 'Proyectos', en: 'Projects' },
    'nav.blog': { es: 'Blog', en: 'Blog' },
    'nav.contact': { es: 'Contáctanos', en: 'Contact' },

    'hero.title.prefix': {
      es: 'Construimos',
      en: 'We build'
    },
    'hero.title.highlight': {
      es: 'Software',
      en: 'Software'
    },
    'hero.title.suffix': {
      es: 'que hace crecer tu negocio',
      en: 'that grows your business'
    },
    'hero.text': {
      es: 'Desarrollo web, apps móviles y sistemas empresariales diseñados para escalar empresas y acelerar su crecimiento digital.',
      en: 'Web development, mobile apps and enterprise systems designed to scale companies and accelerate their digital growth.'
    },
    'hero.cta.quote': {
      es: 'Solicitar Cotización',
      en: 'Request a Quote'
    },
    'hero.cta.whatsapp': {
      es: 'Hablar por WhatsApp',
      en: 'Chat on WhatsApp'
    },
    'hero.cta.projects': {
      es: 'Ver Proyectos',
      en: 'View Projects'
    },

    'services.subtitle': {
      es: 'Nuestros Servicios',
      en: 'Our Services'
    },
    'services.title': {
      es: 'Diseñamos e implementamos productos digitales que impulsan tu negocio',
      en: 'We design and implement digital products that grow your business'
    },
    'services.description': {
      es: 'En Techsync Software combinamos desarrollo web, apps móviles, automatización y diseño UX/UI para llevar tu idea desde el concepto hasta un producto en producción, moderno, rápido y seguro.',
      en: 'At Techsync Software we combine web development, mobile apps, automation and UX/UI design to take your idea from concept to a modern, fast and secure product in production.'
    },

    'service.web.title': { es: 'Desarrollo de Software', en: 'Software Development' },
    'service.web.text': {
      es: 'Plataformas web modernas, rápidas y seguras para empresas y startups: sistemas empresariales, plataformas SaaS, ecommerce y portales corporativos construidos con arquitectura escalable y rendimiento optimizado.',
      en: 'Modern, fast and secure web platforms for companies and startups: enterprise systems, SaaS platforms, e‑commerce and corporate portals built with scalable architecture and optimized performance.'
    },
    'service.mobile.title': { es: 'Aplicaciones Móviles', en: 'Mobile Applications' },
    'service.mobile.text': {
      es: 'Apps nativas e híbridas para iOS y Android creadas con tecnologías modernas. Ideal para apps de reservas, servicios, suscripción o soluciones empresariales conectadas con tu backend.',
      en: 'Native and hybrid apps for iOS and Android built with modern technologies. Ideal for booking, services, subscription apps or enterprise solutions connected to your backend.'
    },
    'service.automation.title': {
      es: 'Automatización y Sistemas Empresariales',
      en: 'Automation & Enterprise Systems'
    },
    'service.automation.text': {
      es: 'Automatizamos procesos críticos de tu negocio con sistemas de gestión, integraciones con APIs, flujos de trabajo automatizados, dashboards y analítica para tomar decisiones basadas en datos.',
      en: 'We automate your critical business processes with management systems, API integrations, automated workflows, dashboards and analytics so you can make data‑driven decisions.'
    },
    'service.ux.title': { es: 'UX/UI Design', en: 'UX/UI Design' },
    'service.ux.text': {
      es: 'Experiencias digitales centradas en el usuario que convierten visitas en clientes. Prototipos, diseño de interfaces y optimización continua de productos digitales con foco en conversión.',
      en: 'User‑centered digital experiences that turn visitors into customers. Prototypes, interface design and continuous optimization of digital products focused on conversion.'
    },

    'service.support.title': {
      es: 'Soporte Técnico',
      en: 'Technical Support'
    },
    'service.support.text': {
      es: 'Mantenimiento proactivo y soporte para garantizar la continuidad operativa de tus sistemas. Monitoreo, resolución de incidencias y acompañamiento cercano a tu equipo.',
      en: 'Proactive maintenance and support to guarantee the operational continuity of your systems. Monitoring, incident resolution and close support for your team.'
    },
    'service.consulting.title': {
      es: 'Consultoría Técnica',
      en: 'Technical Consulting'
    },
    'service.consulting.text': {
      es: 'Asesoramiento estratégico para definir la mejor arquitectura, tecnologías y roadmap digital para tu empresa. Te ayudamos a tomar decisiones técnicas con impacto en el negocio.',
      en: 'Strategic advisory to define the best architecture, technologies and digital roadmap for your company. We help you make technical decisions that truly impact the business.'
    },

    'problems.title': {
      es: '¿Tu empresa necesita tecnología que realmente funcione?',
      en: 'Does your company need technology that really works?'
    },
    'problems.item1': {
      es: 'Procesos manuales que consumen tiempo',
      en: 'Manual processes that waste time'
    },
    'problems.item2': {
      es: 'Falta de automatización en tu negocio',
      en: 'Lack of automation in your business'
    },
    'problems.item3': {
      es: 'Necesitas una app o plataforma digital',
      en: 'You need an app or digital platform'
    },
    'problems.item4': {
      es: 'Tu empresa necesita modernizarse',
      en: 'Your company needs to modernize'
    },
    'problems.cta': {
      es: 'Hablemos sobre tu proyecto',
      en: 'Let’s talk about your project'
    },

    'about.subtitle': { es: 'Por Qué Nosotros?', en: 'Why Us?' },
    'about.title': {
      es: 'Excelencia, Eficiencia e Innovación en Cada Proyecto',
      en: 'Excellence, Efficiency and Innovation in Every Project'
    },
    'about.description': {
      es: 'Como startup especializada, nos enfocamos en entregar soluciones que van más allá de las expectativas. Nuestro enfoque personalizado y nuestra pasión por la tecnología nos permiten crear experiencias digitales que realmente impulsan el crecimiento de tu negocio.',
      en: 'As a specialized startup, we focus on delivering solutions that go beyond expectations. Our personalized approach and passion for technology allow us to create digital experiences that truly drive your business growth.'
    },
    'about.accordion1.title': { es: 'Innovación y Creatividad en el Diseño', en: 'Innovation and Creativity in Design' },
    'about.accordion1.content': {
      es: 'Nuestras soluciones están impulsadas por ideas creativas y un diseño innovador. Diseñamos productos digitales que conectan con tus usuarios y fortalecen tu marca en cada punto de contacto.',
      en: 'Our solutions are driven by creative ideas and innovative design. We design digital products that connect with your users and strengthen your brand at every touchpoint.'
    },
    'about.accordion2.title': { es: 'Experiencia en múltiples sectores', en: 'Experience across multiple sectors' },
    'about.accordion2.content': {
      es: 'Hemos trabajado en plataformas utilizadas por empresas de retail, servicios, importación y distribución, tecnología y consultoría. Desde portales utilizados por más de 200 intermediarios hasta sistemas empresariales de alto tráfico.',
      en: 'We have worked on platforms used by companies in retail, services, import and distribution, technology and consulting. From portals used by more than 200 intermediaries to high-traffic enterprise systems.'
    },
    'about.accordion3.title': { es: 'Compromiso con la calidad y el acompañamiento', en: 'Commitment to quality and support' },
    'about.accordion3.content': {
      es: 'Más que entregar un producto, construimos relaciones de largo plazo. Acompañamos a tu equipo después del lanzamiento, optimizando, automatizando procesos y asegurando que la solución siga creciendo con tu negocio.',
      en: 'More than delivering a product, we build long-term relationships. We support your team after launch, optimizing, automating processes and ensuring the solution continues to grow with your business.'
    },
    'about.highlight1': { es: 'Innovación constante', en: 'Constant innovation' },
    'about.highlight2': { es: 'Resultados medibles', en: 'Measurable results' },
    'about.highlight3': { es: 'Acompañamiento cercano', en: 'Close support' },
    'about.highlight4': { es: 'Calidad y seguridad', en: 'Quality and security' },

    'design.subtitle': {
      es: 'Diseña e implementa',
      en: 'Design & implement'
    },
    'design.title': {
      es: 'De la idea al software en producción',
      en: 'From idea to software in production'
    },
    'design.description': {
      es: 'Te acompañamos en todo el ciclo: diseñamos la experiencia, implementamos la solución con la mejor tecnología y automatizamos tus procesos para que tu negocio escale sin fricción.',
      en: 'We guide you through the whole cycle: we design the experience, implement the solution with the best technology and automate your processes so your business can scale without friction.'
    },
    'design.step1.title': { es: 'Estrategia y análisis', en: 'Strategy and analysis' },
    'design.step1.text': {
      es: 'Entendemos tu negocio, definimos objetivos y diseñamos la solución ideal para tu caso.',
      en: 'We understand your business, define objectives and design the ideal solution for your case.'
    },
    'design.step2.title': { es: 'Desarrollo tecnológico', en: 'Technical development' },
    'design.step2.text': {
      es: 'Construimos la plataforma con tecnologías modernas y buenas prácticas para asegurar calidad y escalabilidad.',
      en: 'We build the platform with modern technologies and best practices to ensure quality and scalability.'
    },
    'design.step3.title': { es: 'Lanzamiento y mejora continua', en: 'Launch and continuous improvement' },
    'design.step3.text': {
      es: 'Publicamos la solución, medimos resultados y la optimizamos para seguir mejorando su rendimiento en el tiempo.',
      en: 'We release the solution, measure results and optimize it to keep improving its performance over time.'
    },

    'blog.subtitle': { es: 'Nuestro Blog', en: 'Our Blog' },
    'blog.title': { es: 'Novedades y Artículos', en: 'News & Articles' },

    'projects.subtitle': { es: 'Nuestros Proyectos', en: 'Our Projects' },
    'projects.title': {
      es: 'Proyectos Reales que Transforman Negocios',
      en: 'Real Projects that Transform Businesses'
    },
    'projects.description': {
      es: 'Más de 3 años diseñando e implementando soluciones para empresas de sectores como retail, servicios, importación y distribución, tecnología y consultoría. Cada proyecto es una historia de crecimiento apoyada en tecnología.',
      en: 'More than 3 years designing and implementing solutions for companies in sectors such as retail, services, import and distribution, technology and consulting. Every project is a growth story powered by technology.'
    },
    'projects.viewProject': { es: 'Ver Proyecto', en: 'View Project' },

    'project.primefoods.alt': { es: 'Prime Foods - Importación de productos gourmet', en: 'Prime Foods - Gourmet product import' },
    'project.primefoods.description': {
      es: 'Plataforma web para una firma dedicada a la importación de productos gourmet. Prime Foods se consagra como el curador definitivo de tesoros culinarios, conectando marcas premium con el mercado local.',
      en: 'Web platform for a firm dedicated to importing gourmet products. Prime Foods stands as the definitive curator of culinary treasures, connecting premium brands with the local market.'
    },
    'project.vizcaino.alt': { es: 'Vizcaino Muebles - Mueblería y Electrodomésticos', en: 'Vizcaino Muebles - Furniture and Appliances' },
    'project.vizcaino.description': {
      es: 'Tienda online para una mueblería y casa de electrodomésticos que ofrece los mejores precios, garantía y facilidades de pago. Diseño orientado a conversión y catálogo organizado para una experiencia de compra clara.',
      en: 'Online store for a furniture and appliance retailer offering the best prices, warranty and payment options. Conversion-focused design and organized catalog for a clear shopping experience.'
    },
    'project.trendly.alt': { es: 'Trendly - Aplicación de citas', en: 'Trendly - Dating app' },
    'project.trendly.description': {
      es: 'Aplicación de citas con enfoque moderno en experiencia de usuario, rendimiento y escalabilidad. Participamos en el diseño y desarrollo de la plataforma digital que conecta personas de forma segura y amigable.',
      en: 'Dating app with a modern focus on user experience, performance and scalability. We took part in designing and developing the digital platform that connects people safely and in a friendly way.'
    },
    'project.eventsplanner.alt': { es: 'Events Planner - Planificación de Eventos', en: 'Events Planner - Event planning' },
    'project.eventsplanner.description': {
      es: 'Página web para planificación de eventos memorables, desde bodas hasta celebraciones corporativas. Desarrollado con WordPress y diseño responsive.',
      en: 'Website for planning memorable events, from weddings to corporate celebrations. Built with WordPress and responsive design.'
    },
    'project.renew.alt': { es: 'Renew Centro de Terapia', en: 'Renew Therapy Center' },
    'project.renew.description': {
      es: 'Sitio web profesional para centro de terapia especializado. Diseño moderno y funcional que refleja la serenidad y profesionalismo del centro.',
      en: 'Professional website for a specialized therapy center. Modern, functional design that reflects the center’s serenity and professionalism.'
    },
    'project.fundacion.alt': { es: 'Fundación Renew', en: 'Renew Foundation' },
    'project.fundacion.description': {
      es: 'Página web. Diseño empático y funcional.',
      en: 'Website. Empathetic and functional design.'
    },

    'tech.webDev': { es: 'Desarrollo Web', en: 'Web Development' },
    'tech.ecommerce': { es: 'Ecommerce', en: 'Ecommerce' },
    'tech.uxui': { es: 'UX/UI', en: 'UX/UI' },
    'tech.retail': { es: 'Retail', en: 'Retail' },
    'tech.seo': { es: 'SEO', en: 'SEO' },
    'tech.mobileApp': { es: 'App Móvil', en: 'Mobile App' },
    'tech.digitalProduct': { es: 'Producto Digital', en: 'Digital Product' },
    'tech.wordpress': { es: 'WordPress', en: 'WordPress' },
    'tech.responsive': { es: 'Responsive', en: 'Responsive' },
    'tech.uiux': { es: 'UI/UX', en: 'UI/UX' },
    'tech.webDesign': { es: 'Diseño Web', en: 'Web Design' },
    'tech.accessibility': { es: 'Accesibilidad', en: 'Accessibility' },

    'blog.category': { es: 'Artículo', en: 'Article' },
    'blog.readMore': { es: 'Leer más', en: 'Read more' },
    'blog.loading': { es: 'Cargando artículo...', en: 'Loading article...' },
    'blog.otherArticles': { es: 'Otros Artículos', en: 'Other Articles' },
    'blog.readArticle': { es: 'Leer artículo', en: 'Read article' },
    'blog.shareLinkedIn': { es: 'Compartir en LinkedIn', en: 'Share on LinkedIn' },
    'blog.shareFacebook': { es: 'Compartir en Facebook', en: 'Share on Facebook' },
    'blog.shareWhatsApp': { es: 'Compartir en WhatsApp', en: 'Share on WhatsApp' },

    'industries.subtitle': {
      es: 'Industrias',
      en: 'Industries'
    },
    'industries.title': {
      es: 'Trabajamos con empresas de diferentes sectores',
      en: 'We work with companies from different sectors'
    },
    'industries.retail': { es: 'Retail', en: 'Retail' },
    'industries.ecommerce': { es: 'Ecommerce', en: 'E‑commerce' },
    'industries.services': { es: 'Servicios', en: 'Services' },
    'industries.tech': { es: 'Tecnología', en: 'Technology' },
    'industries.health': { es: 'Salud', en: 'Healthcare' },
    'industries.education': { es: 'Educación', en: 'Education' },

    'types.title': {
      es: '¿Qué tipo de proyecto necesitas?',
      en: 'What type of project do you need?'
    },
    'types.description': {
      es: 'Elige el tipo de solución que estás buscando y conversemos sobre la mejor forma de construirla.',
      en: 'Choose the type of solution you are looking for and let’s talk about the best way to build it.'
    },
    'types.platform': {
      es: 'Plataforma empresarial',
      en: 'Enterprise platform'
    },
    'types.mobile': {
      es: 'Aplicación móvil',
      en: 'Mobile application'
    },
    'types.ecommerce': {
      es: 'Ecommerce',
      en: 'E‑commerce'
    },

    'results.title': {
      es: 'Resultados que respaldan nuestro trabajo',
      en: 'Results that back our work'
    },
    'results.metric1.label': {
      es: 'proyectos desarrollados',
      en: 'projects delivered'
    },
    'results.metric2.label': {
      es: 'empresas digitalizadas',
      en: 'companies digitalized'
    },
    'results.metric3.label': {
      es: 'usuarios en plataformas desarrolladas',
      en: 'users on the platforms we built'
    },

    'cta.final.title': {
      es: '¿Tienes una idea o proyecto tecnológico?',
      en: 'Do you have a tech idea or project?'
    },
    'cta.final.text': {
      es: 'Nuestro equipo puede ayudarte a construir una solución digital moderna.',
      en: 'Our team can help you build a modern digital solution.'
    },
    'cta.final.quote': {
      es: 'Solicitar Cotización',
      en: 'Request a Quote'
    },
    'cta.final.whatsapp': {
      es: 'Hablar por WhatsApp',
      en: 'Chat on WhatsApp'
    },

    'contact.footer.title': { es: 'Contáctanos', en: 'Contact us' },
    'contact.footer.mail': { es: 'Envíanos un correo', en: 'Send us an email' },
    'footer.address.title': { es: 'Dirección', en: 'Address' },
    'footer.address.city': { es: 'Santo Domingo, República Dominicana', en: 'Santo Domingo, Dominican Republic' },
    'footer.rights': { es: 'Todos los derechos reservados.', en: 'All rights reserved.' },
    'contact.modal.title': { es: 'Contáctanos', en: 'Contact us' },
    'contact.modal.social.title': {
      es: 'Síguenos en nuestras redes sociales',
      en: 'Follow us on our social networks'
    },
    'contact.modal.email.title': {
      es: 'Envíanos un correo',
      en: 'Send us an email'
    },

    'whatsapp.cta': {
      es: 'Solicita una cotización para tu proyecto',
      en: 'Request a quote for your project'
    }
  };

  get currentLang(): LangCode {
    return this.currentLangSubject.value;
  }

  setLanguage(lang: LangCode): void {
    if (this.currentLangSubject.value === lang) return;
    this.currentLangSubject.next(lang);
  }

  translate(key: string): string {
    const lang = this.currentLangSubject.value;
    const entry = this.translations[key];
    if (!entry) {
      return key;
    }
    return entry[lang] ?? entry['es'];
  }
}

